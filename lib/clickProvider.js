'use babel';
/* @flow */

var related = require('./related');
var fs = require('fs');
var _ = require('underscore');

atom.config.get('editor.nonWordCharacters')
var wordRegExp = /^[	 ]*$|[^\s\/\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\-…]+/g
// default :     /^[	 ]*$|[^\s\/\\\(\)"':,\.;<>~!@#\$%\^&\*\|\+=\[\]\{\}`\?\-…]+/g
// by atom.workspace.getActiveTextEditor().getLastCursor().wordRegExp({includeNonWordCharacters:false});

var alloyPathReg = /\/(controllers|views|styles)\/(.*)?\.(.*)/;
var selectorReg =  /(class|id)=\"[\sa-zA-Z-_^]*$/; 

var fromXmlToTssProvider = {
  wordRegExp ,
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    var [isAlloy=false,alloyType,filename,fileExt] = textEditor.getPath().match(alloyPathReg);
    if(!text || fileExt!='xml') return;
    
    var lineText = textEditor.getTextInBufferRange([[range.start.row,0],[range.start.row,range.start.column]]);
    var tagetPath, tagetEditor;
    var callbacks = [];
    var [toTssSelector, selector] = lineText.match(selectorReg);
    
    if(toTssSelector){
      targetPath = related.getTargetPath('tss');
      
      (function(){
        // if targetFile already opened, use that buffer
        var targetBuffer = _.find(atom.workspace.getTextEditors(), (editor) => {
          return editor.getPath() === targetPath;
        });
        
        if(!targetBuffer){ // if targetFile not opened yet, use new buffer
          targetBuffer = new textEditor.buffer.constructor;
          targetBuffer.setPath(targetPath);
          targetBuffer.loadSync();
        }
        
        var selectorRegEx = new RegExp( (selector==='id'?'#':'\.')+text, 'g');
        
        targetBuffer.scan(selectorRegEx, function(item){
          callbacks.push({
            title : item.lineText.replace(/\:.*/,'').replace(/"/g,''),
            callback (){
              related.openFile('tss',{initialLine: item.range.start.row, initialColumn: 0});
            } 
          });
        });
      })();
    }
    
    //if no definition, go last line of ther code
    if(callbacks.length == 0){
      callbacks.push({
        callback () {
          related.openFile('tss',{initialLine: Number.MAX_VALUE, initialColumn: 0});
        }
      })
    }
      
    return {
      range,
      callback : callbacks.length===1? callbacks[0].callback:callbacks
    };
  },
  priority: 1
}

module.exports = {
  getProvider() {
    return [fromXmlToTssProvider];
  },
};
