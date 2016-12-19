'use babel';
/* @flow */

var related = require('./related');
var fs = require('fs');
var _ = require('underscore');
var apd = require("atom-package-dependencies");
var util = require('./ti-pkg-util');
var path = require('path');
var mkdirp = require('mkdirp');
// install missing packages
apd.install();

var wordRegExp = /^[	 ]*$|[^\s\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\…]+/g;
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
  // TODO: backwards hyperclick (from string.xml to L(''))
  lFunction : {
    regExp : /[:\s=,>\)\("]L\(["']*$/,
    definitionRegExp (text){
      return new RegExp(`name=["']${text}["']>(.*)?</`,'g');
    },
    targetPath : function () {
      var i18nPath = util.getI18nPath();
      if(util.isExistAsDirectory(i18nPath)){
        var folders = fs.readdirSync(i18nPath).filter(function(file) {
          return fs.statSync(path.join(i18nPath, file)).isDirectory();
        });

        return folders.map(function (item) {
          return path.join(i18nPath,item,"strings.xml")
        });
      } else {
        return null;
      }
    },
    didGenerateCallbacks ({callbacks,text}){
      var defaultLang = atom.config.get('titanium-alloy.defaultI18nLanguage');
      var i18nStringPath = path.join(util.getI18nPath(),defaultLang,"strings.xml");

      if(callbacks.length == 0){
        callbacks.push({
          title : "NEW i18n String",
          rightLabel : defaultLang,//_.last(path.split('/')).split('.')[0],
          callback (){

            if(!util.isExistAsFile(i18nStringPath)){ //if not, create i18n/strings.xml
              mkdirp.sync(path.join(util.getI18nPath(),defaultLang));
              fs.writeFileSync(i18nStringPath,'<?xml version="1.0" encoding="UTF-8"?>\n<resources>\n</resources>');
            }

            _.defer(function () {
              atom.workspace.open( i18nStringPath,{
                searchAllPanes:true
              }).then(function(te){
                var insertText;
                te.scan(/<\/resources>/,function (iter) {
                  insertText = `\t<string name="${text}"></string>\n</resources>`;
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
        return new RegExp(`["']\.${text}["'\[]`,'g');
      },
      didGenerateCallbacks ({callbacks,text}){
        if(callbacks.length == 0 || _.every(callbacks,(c)=> c.rightLabel == 'styles/app')){
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
                  var insertText = atom.config.get('titanium-alloy.generationTemplate.classOnTss');
                  insertText = insertText.replace(/(\${text})/g,text).replace(/\\n/g,'\n');
                  var lastRow = te.getLastBufferRow();
                  var lastPosition = [lastRow,te.lineTextForBufferRow(lastRow).length];
                  te.setTextInBufferRange([lastPosition, lastPosition], insertText);
                  te.setCursorBufferPosition([lastRow+1, 0]);
                  
                  // add blank line if there is no blank line before new code
                  if(te.lineTextForBufferRow(lastRow).trim().length){
                    te.setTextInBufferRange([lastPosition, lastPosition], '\n');
                    te.setCursorBufferPosition([lastRow+2, 0]);
                  }
                  
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
        return new RegExp(`["']#${text}["'\[]`,'g');
      },
      didGenerateCallbacks ({callbacks,text}){
        if(callbacks.length == 0 || _.every(callbacks,(c)=> c.rightLabel == 'styles/app')){
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
                  var insertText = atom.config.get('titanium-alloy.generationTemplate.idOnTss')
                  insertText = insertText.replace(/(\${text})/g,text).replace(/\\n/g,'\n');
                  var lastRow = te.getLastBufferRow();
                  var lastPosition = [lastRow,te.lineTextForBufferRow(lastRow).length];
                  te.setTextInBufferRange([lastPosition, lastPosition], insertText);
                  te.setCursorBufferPosition([lastRow+1, 0]);
                  
                  // add blank line if there is no blank line before new code
                  if(te.lineTextForBufferRow(lastRow).trim().length){
                    te.setTextInBufferRange([lastPosition, lastPosition], '\n');
                    te.setCursorBufferPosition([lastRow+2, 0]);
                  }
                  
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
        ];
      }
    },
    { // tag
      regExp : /<$/,
      definitionRegExp (text){
        return new RegExp(`["']${text}`,'g');
      },
      didGenerateCallbacks ({callbacks, text}){
        if(callbacks.length == 0 || _.every(callbacks,(c)=> c.rightLabel == 'styles/app')){
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
                  var insertText = atom.config.get('titanium-alloy.generationTemplate.tagOnTss')
                  insertText = insertText.replace(/(\${text})/g,text).replace(/\\n/g,'\n');
                  var lastRow = te.getLastBufferRow();
                  var lastPosition = [lastRow,te.lineTextForBufferRow(lastRow).length];
                  te.setTextInBufferRange([lastPosition, lastPosition], insertText);
                  te.setCursorBufferPosition([lastRow+1, 0]);
                  
                  // add blank line if there is no blank line before new code
                  if(te.lineTextForBufferRow(lastRow).trim().length){
                    te.setTextInBufferRange([lastPosition, lastPosition], '\n');
                    te.setCursorBufferPosition([lastRow+2, 0]);
                  }
                  
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
        ];
      }
    },
    { //handler
      regExp : /on(.*?)=["']$/,
      definitionRegExp (text){
        return new RegExp(`function ${text}\s*?\\(`)
      },
      targetPath : function(text, sourcePath){
        return related.getTargetPath('js')
      },
      didGenerateCallbacks ({callbacks,text}){
        if(callbacks.length == 0){
          let relatedPath = related.getTargetPath('js');
          callbacks.showAlways=true;
          callbacks.push({
            title : `Generate Handler Function`,
            rightLabel : _.last(relatedPath.split('/')).split('.')[0],
            // rightLabel : "en",//_.last(path.split('/')).split('.')[0],
            callback (){
              _.defer(function () {
                atom.workspace.open(relatedPath,{
                  searchAllPanes:true
                }).then(function(te){
                  var insertText = atom.config.get('titanium-alloy.generationTemplate.functionOnJs');
                  insertText = insertText.replace(/(\${text})/g,text).replace(/\\n/g,'\n');
                  var lastRow = te.getLastBufferRow();
                  var lastPosition = [lastRow,te.lineTextForBufferRow(lastRow).length];
                  te.setTextInBufferRange([lastPosition, lastPosition], insertText);
                  te.setCursorBufferPosition([lastRow+1, 0]);
                  
                  // add blank line if there is no blank line before new code
                  if(te.lineTextForBufferRow(lastRow).trim().length){
                    te.setTextInBufferRange([lastPosition, lastPosition], '\n');
                    te.setCursorBufferPosition([lastRow+2, 0]);
                  }
                  
                  te.scrollToCursorPosition();
                });
              });
            }
          });
        }
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
    { //require (/lib) name
      regExp : /require\(["']([-a-zA-Z0-9-_\/]*)$/,
      targetPath : function(text,sourcePath){
        var libFilePath = path.join(util.getAlloyRootPath(), 'lib',text+'.js');
        return libFilePath;
      }
    },
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
    { //widget name
      regExp : /Alloy\.createWidget\(["']$/,
      targetPath : function(text,sourcePath){
        return sourcePath.replace(/app\/(.*)$/,`app/widgets/${text}/controllers/widget.js`)
      }
    },
    { //controller name
      regExp : /Widget\.createController\(["']$/,
      targetPath : function(text,sourcePath){
        var dir = path.dirname(sourcePath);
        return path.join(dir,`${text}.js`);
      }
    },
    { // collection / model name (instance)
      regExp : /Widget\.(Collections|Models).instance\(["']$/,
      targetPath : function(text,sourcePath){
        var dir = path.dirname(sourcePath);
        return path.resolve(dir,`../models/${text}.js`);
      }
    },
    { // collection / model name (create)
      regExp : /Widget\.create(Collection|Model)\(["']$/,
      targetPath : function(text,sourcePath){
        var dir = path.dirname(sourcePath);
        return path.resolve(dir,`../models/${text}.js`);
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
      var pathsSplit = path.split('/');
      callbacks.push({
        title : _.isString(item.match[1])? item.match[1] : item.lineText,
        rightLabel : `${pathsSplit[pathsSplit.length - 2]}/${_.last(pathsSplit).split('.')[0]}`,
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
    if(!textEditor.getPath()) return;
    var [isAlloy=false,alloyType,filename,fileExt] = textEditor.getPath().match(alloyPathReg) || [];
    if(!isAlloy && textEditor.getPath().endsWith('app/alloy.js')){
      isAlloy = true;
      filename = 'alloy';
      fileExt = 'js'
    }
    var isAlloy = util.isAlloyProject();
    var parsedPath = path.parse(textEditor.getPath());
    filename = parsedPath.name
    fileExt = parsedPath.ext.replace('.','');

    var isTiResources = util.isTitaniumProject() &&
      textEditor.getPath().startsWith(path.join(util.getTiProjectRootPath(),'Resources'));
    if(!text || (!isAlloy && !isTiResources)) return;
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
    if(_.isFunction(matchedExpItem.didGenerateCallbacks)) {
      matchedExpItem.didGenerateCallbacks({
        callbacks,
        textEditor,
        text,
        range
      })
    }else{ // or just Open File
      callbacks =[{
        callback () {
          _.defer(function () {
            atom.workspace.open(targetPath[0],{searchAllPanes:true});
          });
        }
      }];
    };


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
