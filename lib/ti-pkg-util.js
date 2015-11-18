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
      hiddenEditor = hiddenEditor ||  document.createElement('atom-text-editor').getModel();
      hiddenEditor.buffer.setPath(path);
      hiddenEditor.buffer.loadSync();
      targetEditor = hiddenEditor
    }
    
    return  targetEditor;
  }
}
