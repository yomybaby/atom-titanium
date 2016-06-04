'use babel';
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var BufferedProcess = require("atom").BufferedProcess;
var hiddenEditor;

var isAlloy18Later;
var process = new BufferedProcess({
    command: "alloy",
    args: ['-v'],
    stdout: function(e) {
        if(e>="1.8"){
          isAlloy18Later = true;
        }
    }
});


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
    var activeEditor = atom.workspace.getActiveTextEditor();

    if(activeEditor && atom.project.rootDirectories.length){
      return atom.project.relativizePath(activeEditor.getPath())[0] || '';
    }
    return '';
  },
  isTitaniumProject : function(){
    
    if( this.isExistAsFile(path.join(this.getTiProjectRootPath(),'tiapp.xml')) ){
      return true
    }
  },
  sortCompletions : function (completes) {

  },
  getAlloyRootPath : function () {
    return path.join(this.getTiProjectRootPath(),'app');
  },
  isAlloyProject : function () {
    return this.isExistAsDirectory(this.getAlloyRootPath());
  },
  getI18nPath : function () {
    if(this.isAlloyProject() && isAlloy18Later ){
      return path.join(this.getAlloyRootPath(),'i18n');
    }else{
      return path.join(this.getTiProjectRootPath(),'i18n');
    }
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
  })(),
  getLine : function(arg) {
    var bufferPosition, editor, line;
    editor = arg.editor, bufferPosition = arg.bufferPosition;
    return line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
  },
  toUnixPath : function(p) { //https://github.com/anodynos/upath
    var double;
    p = p.replace(/\\/g, '/');
    double = /\/\//;
    while (p.match(double)) {
      p = p.replace(double, '/');
    }
    return p;
  }
}
