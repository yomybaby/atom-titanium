{CompositeDisposable} = require 'atom'
_ = require 'underscore'
util = require './ti-pkg-util'
path = require 'path'

alloyDirectoryMap =
  xml : "views"
  tss : "styles"
  js : "controllers"
  
getTargetPath = (type, currentFilePath = atom.workspace.getActiveTextEditor().getPath())->
  pathUnderAlloy = path.relative(util.getAlloyRootPath(),currentFilePath)
  pathSplitArr = pathUnderAlloy.split(path.sep)
  
  if pathSplitArr[0] is 'widgets'
    pathSplitArr[2] = alloyDirectoryMap[type]  # change type
  else
    pathSplitArr[0] = alloyDirectoryMap[type]  # change type
  
  fileSplitArr = pathSplitArr[pathSplitArr.length - 1].split('.') 
  fileSplitArr[1] = type #change ext
  
  path.resolve(util.getAlloyRootPath(), pathSplitArr.join(path.sep),'..',fileSplitArr.join('.'))

getRelatedFilePath = (editorPath) ->
  
  pathSplit = path.relative(util.getAlloyRootPath(),editorPath).split(path.sep)
  currentType = if pathSplit[0] is 'widgets' then pathSplit[2] else pathSplit[0]

  hasRelatedFiles = ['views','styles','controllers'].indexOf(currentType) >= 0
  
  return [] if !util.isAlloyProject() or !hasRelatedFiles
  
  fileExt = path.parse(editorPath).ext.substr(1);
  isAppTss = editorPath.endsWith(path.resolve('/app/styles/app.tss')) # TODO : make more advanced Detection
  isAlloyJs = editorPath.endsWith(path.resolve('/app/alloy.js')) # TODO : make more advanced Detection
  
  relatedFilePaths = []
  
  if isAppTss
    relatedFilePaths = [editorPath.replace(path.resolve('/app/styles/app.tss'),path.resolve('/app/alloy.js'))]
  else if isAlloyJs
    relatedFilePaths = [editorPath.replace(path.resolve('/app/alloy.js'),path.resolve('/app/styles/app.tss'))]
  else
    _.each alloyDirectoryMap, (folderName,ext)->
      if ext!= fileExt
        relatedFilePaths.push(getTargetPath(ext,editorPath));

  relatedFilePaths
        
module.exports =
  activate: ->
    atom.commands.add 'atom-workspace', 'titanium:openView': => @openFile('xml')
    atom.commands.add 'atom-workspace', 'titanium:openStyle': => @openFile('tss')
    atom.commands.add 'atom-workspace', 'titanium:openController': => @openFile('js')
    atom.commands.add 'atom-workspace', 'titanium:openAllRelatedFiles': => @openAllFiles()
    atom.commands.add 'atom-workspace', 'titanium:closeAllRelatedPanes': => @closeAllRelatedPanes()
    
  openFile: (type, options = {})->
    options.searchAllPanes = true
    atom.workspace.open getTargetPath(type), options
  
  openAllFiles: () ->
    editor = atom.workspace.getActiveTextEditor()
    previousActivePane = atom.workspace.getActivePane()
    return unless editor?
    
    relatedFilePaths = getRelatedFilePath(editor.getPath())
    return unless relatedFilePaths.length
        
    
    # if number of panes is under 3, make more.
    numberOfPanes = atom.workspace.getPanes().length;
    
    while atom.workspace.getPanes().length<3
      lastPane = _.last(atom.workspace.getPanes())
      if atom.config.get('titanium-alloy.numberOfSplitPane')==2 and atom.workspace.getPanes().length == 2
        lastPane.splitDown()
      else
        lastPane.splitRight()
        
    panes = atom.workspace.getPanes()
    
    newPaneIdx = 0
    for pane in panes
      if pane != previousActivePane and relatedFilePaths[newPaneIdx]
        pane.activate();
        atom.workspace.open(relatedFilePaths[newPaneIdx++], {}).then( ->
          previousActivePane.activate();
        )
          
  closeAllRelatedPanes: () ->
    editor = atom.workspace.getActiveTextEditor()
    relatedFilePaths = getRelatedFilePath(editor.getPath())
    allEditors = atom.workspace.getTextEditors()
    
    # find and close
    for editor in allEditors
      for path in relatedFilePaths
        if path == editor.getPath()
          editor.destroy()
      
  getTargetPath: getTargetPath
  getRelatedFilePath : getRelatedFilePath
