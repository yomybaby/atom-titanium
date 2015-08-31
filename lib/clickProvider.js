'use babel';
/* @flow */

var related = require('./related');
var fs = require('fs');
var _ = require('underscore');

var wordRegExp = /^[	 ]*$|[^\s\/\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\…]+/g
// default :     /^[	 ]*$|[^\s\/\\\(\)"':,\.;<>~!@#\$%\^&\*\|\+=\[\]\{\}`\?\-…]+/g
// by atom.workspace.getActiveTextEditor().getLastCursor().wordRegExp({includeNonWordCharacters:false});

var alloyPathReg = /\/(controllers|views|styles)\/(.*)?\.(.*)/;
var selectorReg =  /(class|id)=(\"|\')[\sa-zA-Z-_^]*$/; 

var regExps = {
  xml : [
    { // class
      regExp : /class=["'][\sa-zA-Z-_^]*$/,
      definitionRegExp (text){
        return new RegExp(`["'].${text}`,'g');
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('tss')
      }
    },
    { // id
      regExp : /id=["'][\sa-zA-Z-_^]*$/,
      definitionRegExp (text){
        return new RegExp(`["']#${text}`,'g');
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('tss')
      }
    },
    { // tag
      regExp : /<$/,
      definitionRegExp (text){
        return new RegExp(`["']${text}`,'g');
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('tss')
      }
    },
    { //handler
      regExp : /on(.*?)=["']/,
      definitionRegExp (text){
        return new RegExp(`function ${text}\s*?\\(`)
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('js')
      }
    },
    { //widget controller
      regExp : /<Widget[\sa-zA-Z-_^='"]*src=["']$/,
      targetPath : function (text, sourcePath) {
        return sourcePath.replace(/app\/(.*)$/,`app/widgets/${text}/controllers/widget.js`);
      }
    },
    { //Required Controller
      regExp : /<Require[\sa-zA-Z-_^='"]*src=["']$/,
      targetPath : function (text, sourcePath) {
        return sourcePath.replace(/app\/(.*)$/,`app/controllers/${text}.js`);
      }
    }
  ],
  js : [
    {
      regExp : /Alloy\.createController\(["']$/,
      targetPath : function(text,sourcePath){
        return sourcePath.replace(/app\/(.*)$/,`app/controllers/${text}.js`)
      }
    },
    {
      regExp : /Alloy\.Collections.instance\(["']$/,
      targetPath : function(text,sourcePath){
        return sourcePath.replace(/app\/(.*)$/,`app/models/${text}.js`)
      }
    }
  ]
};

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

  if(!targetBuffer.isEmpty()){
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
  }
  
  //if no definition, go last line of ther code
  if(callbacks.length == 0){ 
    callbacks.push({
      callback () {
        atom.workspace.open(path,{initialLine: Number.MAX_VALUE, initialColumn: 0, searchAllPanes:true});
      }
    });
  }
  
  return callbacks;
};

var xmlClickProvider = {
  wordRegExp ,
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    var [isAlloy=false,alloyType,filename,fileExt] = textEditor.getPath().match(alloyPathReg) || [];
    if(!text || !regExps[fileExt]) return;
    
    var lineText = textEditor.getTextInBufferRange([[range.start.row,0],[range.start.row,range.start.column]]);
    var callbacks;
    
    console.log(fileExt);
  
    var matchedExpItem = _.find(regExps[fileExt],function(item){
      console.log(lineText, item.regExp);
      console.log(item.regExp.test(lineText));
      return item.regExp.test(lineText);
    });
    
    if(!matchedExpItem) return;
    
    var definitionRegExp = _.isFunction(matchedExpItem.definitionRegExp)?matchedExpItem.definitionRegExp(text):matchedExpItem.definitionRegExp;
    var targetPath = _.isFunction(matchedExpItem.targetPath)?matchedExpItem.targetPath(text, textEditor.getPath()):matchedExpItem.targetPath;
    if(definitionRegExp){
      
      callbacks = findDefinition(targetPath, definitionRegExp, textEditor);
    }else{ // or just Open File
      callbacks =[{
        callback () {
          atom.workspace.open(targetPath,{searchAllPanes:true});
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
