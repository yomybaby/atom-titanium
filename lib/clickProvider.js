'use babel';
/* @flow */

var related = require('./related');
var fs = require('fs');
var _ = require('underscore');
var apd = require("atom-package-dependencies");
var util = require('./ti-pkg-util');
var path = require('path');
// install missing packages
apd.install();

var wordRegExp = /^[	 ]*$|[^\s\/\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\…]+/g;
// default :     /^[	 ]*$|[^\s\/\\\(\)"':,\.;<>~!@#\$%\^&\*\|\+=\[\]\{\}`\?\-…]+/g
// by atom.workspace.getActiveTextEditor().getLastCursor().wordRegExp({includeNonWordCharacters:false});

var alloyPathReg = /\/(controllers|views|styles)\/(.*)?\.(js|xml|tss)/;
var selectorReg =  /(class|id)=(\"|\')[\sa-zA-Z-_^]*$/; 

function generateJustOpenFileCallback ({path, options, callback}) {
  options = options || {initialLine: Number.MAX_VALUE, initialColumn: 0, searchAllPanes:true};
  return  {
    callback(){
      _.defer(function () {
        atom.workspace.open(path, options).then(callback);
      });
    }
  };
}

var selectorFactory = {
  lFunction : {
    regExp : /[:\s=,>"]L\(["'']*$/,
    definitionRegExp (text){
      return new RegExp(`name=["']${text}`,'g');
    },
    targetPath : function () {
      return path.join(util.getTiProjectRootPath(),"i18n","en","strings.xml")
    },
    didGenerateCallbacks ({callbacks,text}){
      if(callbacks.length == 0){ 
        callbacks.push({
          title : "NEW i18n String",
          rightLabel : "en",//_.last(path.split('/')).split('.')[0],
          callback (){
            _.defer(function () {
              atom.workspace.open(path.join(util.getTiProjectRootPath(),"i18n","en","strings.xml"),{
                searchAllPanes:true
              }).then(function(te){
                var insertText;
                te.scan(/<\/resources>/,function (iter) {
                  insertText = `\t<string name="${text}"></string>\n${iter.lineText}`;
                  te.setTextInBufferRange(iter.range, insertText);
                  te.setCursorBufferPosition([iter.range.start.row, insertText.split('><')[0].length+1]);
                });
                te.scrollToCursorPosition();
              });
            });
          }
        });
      }
    },
    showCallbackAlways : true
  }
}
var regExps = {
  xml : [
    { // class
      regExp : /class=["'][\s0-9a-zA-Z-_^]*$/,
      definitionRegExp (text){
        return new RegExp(`["'].${text}`,'g');
      },
      didGenerateCallbacks ({callbacks,text}){
        if(callbacks.length == 0){ 
          let relatedPath = related.getTargetPath('tss');
          callbacks.showAlways=true;
          callbacks.push({
            title : `Generate style`,
            rightLabel : _.last(relatedPath.split('/')).split('.')[0],
            // rightLabel : "en",//_.last(path.split('/')).split('.')[0],
            callback (){
              _.defer(function () {
                atom.workspace.open(relatedPath,{
                  searchAllPanes:true
                }).then(function(te){
                  var insertText = `\n".${text}": {\n}\n`//`\t<string name="${text}"></string>\n${iter.lineText}`;
                  var lastRow = te.getLastBufferRow();
                  console.log(lastRow);
                  var lastPosition = [lastRow,te.lineTextForBufferRow(lastRow).length-1];
                  te.setTextInBufferRange([lastPosition, lastPosition], insertText);
                  te.setCursorBufferPosition([lastRow+1, 0]);
                  te.scrollToCursorPosition();
                });
              });
            }
          });
        }
      },
      targetPath : function(text, sourcePath){
        return [
          related.getTargetPath('tss'),
          path.join(util.getTiProjectRootPath(),'app','styles','app.tss')
        ]
      }
    },
    { // id
      regExp : /id=["'][\s0-9a-zA-Z-_^]*$/,
      definitionRegExp (text){
        return new RegExp(`["']#${text}`,'g');
      },
      didGenerateCallbacks ({callbacks,text}){
        if(callbacks.length == 0){ 
          let relatedPath = related.getTargetPath('tss');
          callbacks.showAlways=true;
          callbacks.push({
            title : `Generate style`,
            rightLabel : _.last(relatedPath.split('/')).split('.')[0],
            // rightLabel : "en",//_.last(path.split('/')).split('.')[0],
            callback (){
              _.defer(function () {
                atom.workspace.open(relatedPath,{
                  searchAllPanes:true
                }).then(function(te){
                  var insertText = `\n"#${text}": {\n}\n`//`\t<string name="${text}"></string>\n${iter.lineText}`;
                  var lastRow = te.getLastBufferRow();
                  console.log(lastRow);
                  var lastPosition = [lastRow,te.lineTextForBufferRow(lastRow).length-1];
                  te.setTextInBufferRange([lastPosition, lastPosition], insertText);
                  te.setCursorBufferPosition([lastRow+1, 0]);
                  te.scrollToCursorPosition();
                });
              });
            }
          });
        }
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
      didGenerateCallbacks ({callbacks}){
        if(callbacks.length == 0){ 
          callbacks.push(generateJustOpenFileCallback({
            path : related.getTargetPath('tss'),
            callback :function () {
              
            }
          }));
        }
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('tss')
      }
    },
    { //handler
      regExp : /on(.*?)=["']$/,
      definitionRegExp (text){
        return new RegExp(`function ${text}\s*?\\(`)
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('js')
      }
    },
    { //widget controller
      regExp : /<Widget[\s0-9a-zA-Z-_^='"]*src=["']$/,
      targetPath : function (text, sourcePath) {
        return sourcePath.replace(/app\/(.*)$/,`app/widgets/${text}/controllers/widget.js`);
      }
    },
    { //Required Controller
      regExp : /<Require[\s0-9a-zA-Z-_^='"]*src=["']$/,
      targetPath : function (text, sourcePath) {
        return sourcePath.replace(/app\/(.*)$/,`app/controllers/${text}.js`);
      }
    },
    selectorFactory.lFunction
  ],
  js : [
    { //controller name
      regExp : /Alloy\.createController\(["']$/,
      targetPath : function(text,sourcePath){
        return sourcePath.replace(/app\/(.*)$/,`app/controllers/${text}.js`)
      }
    },
    { // collection / model name (instance)
      regExp : /Alloy\.(Collections|Models).instance\(["']$/,
      targetPath : function(text,sourcePath){
        return sourcePath.replace(/app\/(.*)$/,`app/models/${text}.js`)
      }
    },
    { // collection / model name (create)
      regExp : /Alloy\.create(Collection|Model)\(["']$/,
      targetPath : function(text,sourcePath){
        return sourcePath.replace(/app\/(.*)$/,`app/models/${text}.js`)
      }
    },
    selectorFactory.lFunction
  ],
  tss : [
    {
      scopes : [
        "source.css.tss",
        "meta.selector.css.tss",
        "entity.other.attribute-name.id.css.tss",
        "punctuation.definition.entity.css.id.tss",
      ],
      definitionRegExp (text){
        return new RegExp(`id=["']${text.replace('#','')}`,'g');
      },
      targetPath : function(text,sourcePath){
        return related.getTargetPath('xml');
      }
    },
    {
      scopes : [
        "source.css.tss",
        "meta.selector.css.tss",
        "entity.other.attribute-name.class.css.tss",
        "punctuation.definition.entity.css.class.tss"
      ],
      definitionRegExp (text){
        return new RegExp(`class=["']${text.replace('.','')}`,'g');
      },
      targetPath : function(text,sourcePath){
        return related.getTargetPath('xml');
      }
    },
    selectorFactory.lFunction
  ]
};

function findDefinition(path,regExp, textEditor, rightLabel){
  var callbacks = [];
  
  var targetEditor = util.getFileEditor(path);
  if(!targetEditor.isEmpty()){
    targetEditor.scan(regExp,function(item){
      callbacks.push({
        title : item.lineText,
        rightLabel : _.last(path.split('/')).split('.')[0],
        callback (){
          _.defer(function () {
            atom.workspace.open(path,{
              searchAllPanes:true
            }).then(function(te){
              te.setCursorBufferPosition([item.range.start.row, item.range.start.column]);
              te.scrollToCursorPosition();
            });
          });
        }
      });
    });
  }
  
  return callbacks;
};

var clickProvider = {
  providerName : 'Titanium Alloy',
  wordRegExp ,
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    var [isAlloy=false,alloyType,filename,fileExt] = textEditor.getPath().match(alloyPathReg) || [];
    if(!isAlloy && textEditor.getPath().endsWith('app/alloy.js')){
      isAlloy = true;
      filename = 'alloy';
      fileExt = 'js'
    }
    if(!text || !isAlloy) return;
    if(!regExps[fileExt]) return;
    
    var lineText = textEditor.getTextInBufferRange([[range.start.row,0],[range.start.row,range.start.column]]);
    var cursorScopes = textEditor.scopeDescriptorForBufferPosition(range.start).getScopesArray()
    var callbacks = [];
    
    if(atom.inDevMode()) console.log(lineText, range, text);
  
    var matchedExpItem = _.find(regExps[fileExt],function(item){
      if(item.regExp){
        return item.regExp.test(lineText);
      }else if(item.scopes){
        return JSON.stringify(item.scopes) == JSON.stringify(cursorScopes)
      }
    });
    
    if(!matchedExpItem) return;
    
    var definitionRegExp = _.isFunction(matchedExpItem.definitionRegExp)?matchedExpItem.definitionRegExp(text):matchedExpItem.definitionRegExp;
    
    
    var targetPath = _.isFunction(matchedExpItem.targetPath)?matchedExpItem.targetPath(text, textEditor.getPath()):matchedExpItem.targetPath;
    
    if(!_.isArray(targetPath)) targetPath = [targetPath]; //make it array
    
    if(definitionRegExp){
      _.each(targetPath,function (tPath) {
        callbacks = callbacks.concat(findDefinition(tPath, definitionRegExp, textEditor));
      });
    }else{ // or just Open File
      callbacks =[{
        callback () {
          _.defer(function () {
            atom.workspace.open(targetPath[0],{searchAllPanes:true});
          });
        }
      }];
    }
    
    //if no definition, go last line of ther code
    if(_.isFunction(matchedExpItem.didGenerateCallbacks)) matchedExpItem.didGenerateCallbacks({
      callbacks,
      textEditor,
      text,
      range
    });
    
    
    return {
      range: range,
      callback : (callbacks.length===1 && !matchedExpItem.showCallbackAlways && !callbacks.showAlways)? callbacks[0].callback:callbacks
    };
  },
  priority: 1
}

module.exports = {
  getProvider() {
    return clickProvider;
  },
};
