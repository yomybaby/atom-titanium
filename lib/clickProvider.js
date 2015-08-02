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

var xmlToTssRegExps = [
  {
    regExp : /class=["'][\sa-zA-Z-_^]*$/,
    getTargetRegExp (text){
      return new RegExp(`.${text}`,'g');
    },
    targetType : 'tss'
  },
  {
    regExp : /id=["'][\sa-zA-Z-_^]*$/,
    getTargetRegExp (text){
      return new RegExp(`#${text}`,'g');
    },
    targetType : 'tss'
  }
];

function findDefinition(path,regExp){
  var callbacks = [];
  var targetBuffer = _.find(atom.workspace.getTextEditors(), (editor) => {
    return editor.getPath() === path;
  });
  
  if(!targetBuffer){ // if targetFile not opened yet, use new buffer
    targetBuffer = atom.getActiveTextEditor().buffer.constructor; //require('text-buffer')
    targetBuffer.setPath(path);
    targetBuffer.loadSync();
  }
  
  targetBuffer.scan(regExp,function(item){
    callbacks.push({
      title : item.lineText,
      callback (){
        related.openFile('tss',{initialLine: item.range.start.row, initialColumn: item.range.start.column});
      }
    });
  });
  
  return callbacks.length?callbacks:false;
}

var xmlClickProvider = {
  wordRegExp ,
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    var [isAlloy=false,alloyType,filename,fileExt] = textEditor.getPath().match(alloyPathReg);
    if(!text || fileExt!='xml') return;
    
    var lineText = textEditor.getTextInBufferRange([[range.start.row,0],[range.start.row,range.start.column]]);
    var callbacks;
  
    _.find(xmlToTssRegExps,function(item){
      if(item.regExp.test(lineText)){
        callbacks = findDefinition(related.getTargetPath(item.targetType), item.getTargetRegExp(text));
      }
      return callbacks;
    });
    
    //if no definition, go last line of ther code
    if(!callbacks){
      callbacks = [{
        callback () {
          related.openFile('tss',{initialLine: Number.MAX_VALUE, initialColumn: 0});
        }
      }];
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
    return [xmlClickProvider];
  },
};
