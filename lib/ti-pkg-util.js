'use babel';
var _ = require('underscore');
var fs = require('fs');
var path = require('path');

var hiddenEditor;

module.exports = {
  getFileEditor: function(path){
    var targetEditor = _.find(atom.workspace.getTextEditors(), (editor) => {
      return editor.getPath() === path;
    });
    
    // if targetFile not opened or tokenized yet, use new buffer
    if(!targetEditor || (targetEditor && !targetEditor.displayBuffer.tokenizedBuffer.fullyTokenized)){ 
      hiddenEditor = hiddenEditor ||  atom.workspace.buildTextEditor();  //https://discuss.atom.io/t/best-way-to-create-new-texteditor/18995/5 
      hiddenEditor.buffer.setPath(path);
      hiddenEditor.buffer.loadSync();
      targetEditor = hiddenEditor
    }
    
    return  targetEditor;
  },
  completionSortFun : function (a,b) {
    aStr = a.text || a.displayText || a.snippet || '';
    bStr = b.text || b.displayText || b.snippet || '';
    return aStr.length - bStr.length;
  },
  getTiProjectRootPath : function () {
    if (atom.project.rootDirectories[0] && atom.project.rootDirectories[0].path){
      return atom.project.rootDirectories[0].path;
    }
  },
  isTitaniumProject : function(){
    if(fs.statSync(path.join(this.getTiProjectRootPath(),'tiapp.xml')).isFile()){
      return true
    }
  },
  sortCompletions : function (completes) {
    
  },
  getAlloyRootPath : function () {
    return path.join(this.getTiProjectRootPath(),'app');
  },
  isExistAsFile : function (path) {
    try {
      var stat = fs.statSync(path);
      return stat.isFile();
    } catch(err) {
      return !(err && err.code === 'ENOENT');
    }
  },
  isExistAsDirectory : function (path) {
    try {
      var stat = fs.statSync(path);
      return stats.isDirectory();
    } catch(err) {
      return !(err && err.code === 'ENOENT');
    }
  },
  getCustomPrefix : (function () {
    var regex = /^[	 ]*$|[^\s\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\…]+$/;

    return function (request) {
      var editor = request.editor;
      var bufferPosition = request.bufferPosition;
      
      // Get the text for the line up to the triggered buffer position
      var line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
      
      // Match the regex to the line, and return the match
      var matchResult = line.match(regex)
      return matchResult?matchResult[0]:'';
    }
  })()
}
