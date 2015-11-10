'use babel';
var _ = require('underscore');

var bufferForScan;

module.exports = {
  getFileBuffer: function(path) {
    var targetBuffer = _.find(atom.workspace.getTextEditors(), (editor) => {
      return editor.getPath() === path;
    });
    
    if(!targetBuffer){ // if targetFile not opened yet, use new buffer
      bufferForScan = bufferForScan ||  document.createElement('atom-text-editor').getModel().buffer;
      targetBuffer =  bufferForScan;
      targetBuffer.setPath(path);
      targetBuffer.loadSync();
    }
    
    return targetBuffer;
  }
}
