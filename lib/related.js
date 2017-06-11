'use babel';

import { CompositeDisposable } from 'atom';
import _ from 'underscore';
import util from './ti-pkg-util';
import path from 'path';

let alloyDirectoryMap = {
  xml : "views",
  tss : "styles",
  js : "controllers"
};
  
let getTargetPath = function(type, currentFilePath){
  if (currentFilePath == null) { currentFilePath = atom.workspace.getActiveTextEditor().getPath(); }
  let pathUnderAlloy = path.relative(util.getAlloyRootPath(),currentFilePath);
  let pathSplitArr = pathUnderAlloy.split(path.sep);
  
  if (pathSplitArr[0] === 'widgets') {
    pathSplitArr[2] = alloyDirectoryMap[type];  // change type
  } else {
    pathSplitArr[0] = alloyDirectoryMap[type];  // change type
  }
  
  let fileSplitArr = pathSplitArr[pathSplitArr.length - 1].split('.'); 
  fileSplitArr[fileSplitArr.length-1] = type; //change ext
  
  return path.resolve(util.getAlloyRootPath(), pathSplitArr.join(path.sep),'..',fileSplitArr.join('.'));
};

let getRelatedFilePath = function(editorPath) {
  
  let pathSplit = path.relative(util.getAlloyRootPath(),editorPath).split(path.sep);
  let currentType = pathSplit[0] === 'widgets' ? pathSplit[2] : pathSplit[0];

  let hasRelatedFiles = ['views','styles','controllers'].indexOf(currentType) >= 0;

  let fileExt = path.parse(editorPath).ext.substr(1);
  let isAppTss = editorPath.endsWith(path.join('/app/styles/app.tss')); // TODO : make more advanced Detection
  let isAlloyJs = editorPath.endsWith(path.join('/app/alloy.js')); // TODO : make more advanced Detection
  if (!util.isAlloyProject() || (!hasRelatedFiles && !isAppTss && !isAlloyJs)) { return []; }

  let relatedFilePaths = [];
  
  if (isAppTss) {
    relatedFilePaths = [editorPath.replace(path.join('/app/styles/app.tss'),path.join('/app/alloy.js'))];
  } else if (isAlloyJs) {
    relatedFilePaths = [editorPath.replace(path.join('/app/alloy.js'),path.join('/app/styles/app.tss'))];
  } else {
    _.each(alloyDirectoryMap, function(folderName,ext){
      if (ext!== fileExt) {
        return relatedFilePaths.push(getTargetPath(ext,editorPath));
      }
    });
  }

  return relatedFilePaths;
};
        
export default {
  activate() {
    
    return this.commands = atom.commands.add('atom-workspace', { 
      'titanium:openView': () => this.openFile('xml'),
      'titanium:openStyle': () => this.openFile('tss'),
      'titanium:openController': () => this.openFile('js'),
      'titanium:openAllRelatedFiles': () => this.openAllFiles(),
      'titanium:closeAllRelatedPanes': () => this.closeAllRelatedPanes()
    }
    );
  },
  
  deactive() {
    this.commands.dispose();
    return this.commands = null;
  },
    
  openFile(type, options){
    if (options == null) { options = {}; }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) { return; }
    
    options.searchAllPanes = true;
    return atom.workspace.open(getTargetPath(type), options);
  },
  
  async openAllFiles() {
    let editor = atom.workspace.getActiveTextEditor();
    let previousActivePane = atom.workspace.getActivePane();
    if (editor == null) { return; }
    
    let relatedFilePaths = getRelatedFilePath(editor.getPath());
    if (!relatedFilePaths.length) { return; }
        
    
    // if number of panes is under 3, make more.
    let numberOfPanes = atom.workspace.getCenter().getPanes();
    
    while (atom.workspace.getCenter().getPanes().length<3) {
      let lastPane = _.last(atom.workspace.getCenter().getPanes());
      if ((atom.config.get('titanium-alloy.numberOfSplitPane')===2) && (atom.workspace.getPanes().length === 2)) {
        lastPane.splitDown();
      } else {
        lastPane.splitRight();
      }
    }
        
    let panes = atom.workspace.getCenter().getPanes();
    
    let newPaneIdx = 0;
    for (let pane of Array.from(panes)) {
      if ((pane !== previousActivePane) && relatedFilePaths[newPaneIdx]) {
        pane.activate();
        await atom.workspace.open(relatedFilePaths[newPaneIdx++], {}).then( function() {
          previousActivePane.activate();
        });
      }
    };
  },
          
  closeAllRelatedPanes() {
    let editor = atom.workspace.getActiveTextEditor();
    let relatedFilePaths = getRelatedFilePath(editor.getPath());
    let allEditors = atom.workspace.getTextEditors();
  
    if (!editor) { return; }
    
    // find and close
    return (() => {
      let result = [];
      for (editor of Array.from(allEditors)) {
        result.push((() => {
          let result1 = [];
          for (let p of Array.from(relatedFilePaths)) {
            let item;
            if (p === editor.getPath()) {
              item = editor.destroy();
            }
            result1.push(item);
          }
          return result1;
        })());
      }
      return result;
    })();
  },
      
  getTargetPath,
  getRelatedFilePath
};
