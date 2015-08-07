'use babel';
/* @flow */

var related = require('./related');
var fs = require('fs');
var _ = require('underscore');

var wordRegExp = /^[	 ]*$|[^\s\/\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\-…]+/g
// default :     /^[	 ]*$|[^\s\/\\\(\)"':,\.;<>~!@#\$%\^&\*\|\+=\[\]\{\}`\?\-…]+/g
// by atom.workspace.getActiveTextEditor().getLastCursor().wordRegExp({includeNonWordCharacters:false});

var alloyPathReg = /\/(controllers|views|styles)\/(.*)?\.(.*)/;
var selectorReg =  /(class|id)=(\"|\')[\sa-zA-Z-_^]*$/; 

var fromXmlRegExps = [
  { // class
    regExp : /class=["'][\sa-zA-Z-_^]*$/,
    getTargetRegExp (text){
      return new RegExp(`["'].${text}`,'g');
    },
    targetType : 'tss'
  },
  { // id
    regExp : /id=["'][\sa-zA-Z-_^]*$/,
    getTargetRegExp (text){
      return new RegExp(`["']#${text}`,'g');
    },
    targetType : 'tss'
  },
  { // tag
    regExp : /<$/,
    getTargetRegExp (text){
      return new RegExp(`["']${text}`,'g');
    },
    targetType : 'tss'
  },
  { //handler
    regExp : /on(.*?)=["']/,
    getTargetRegExp (text){
      return new RegExp(`function ${text}\s*?\\(`)
    },
    targetType : 'js'
  }
];

function findDefinition(path,regExp, textEditor){
  var callbacks = [];
  var targetBuffer = _.find(atom.workspace.getTextEditors(), (editor) => {
    return editor.getPath() === path;
  });
  
  if(!targetBuffer){ // if targetFile not opened yet, use new buffer
    targetBuffer = new textEditor.buffer.constructor; //require('text-buffer')
    targetBuffer.setPath(path);
    targetBuffer.loadSync();
  }

  targetBuffer.scan(regExp,function(item){
    callbacks.push({
      title : item.lineText,
      callback (){
        atom.workspace.open(path,{
          searchAllPanes:true
        }).then(function(te){
          te.setCursorBufferPosition([item.range.start.row, item.range.start.column])
        });
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
  
    var matchedExpItem = _.find(fromXmlRegExps,function(item){
      return item.regExp.test(lineText);
    });
    
    if(!matchedExpItem) return;
    
    callbacks = findDefinition(related.getTargetPath(matchedExpItem.targetType), matchedExpItem.getTargetRegExp(text), textEditor);
    
    //if no definition, go last line of ther code
    if(!callbacks){
      callbacks = [{
        callback () {
          atom.workspace.open(related.getTargetPath(matchedExpItem.targetType),{initialLine: Number.MAX_VALUE, initialColumn: 0, searchAllPanes:true});
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
