'use babel';
var _ = require('underscore');

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
  }
}
