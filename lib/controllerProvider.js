'use babel'

import fs from 'fs';
let tagRegExp =  /(<([^>]+)>)/ig;
import util from './ti-pkg-util';
import related from './related';
import _ from 'underscore';
import viewAutoProvider from './viewProvider';
import find from 'find';
import path from 'path';
import { parseString } from 'xml2js';
import alloyCompletionRules from './alloyCompletionRules';

let propertyNamePrefixPattern = /\.([a-zA-Z]+[-a-zA-Z-_]*)$/;
let alloyIdNamePattern = /\$\.([-a-zA-Z0-9-_]*)$/;
let alloyIdMemberPattern = /\$\.([-a-zA-Z0-9-_]*).([-a-zA-Z0-9-_]*)$/;

let { getLine } = util;

customAlloyCompletionRules = [
  {
    regExp: /require\(["']([-a-zA-Z0-9-_\/]*)$/,
    getCompletions(request) {
      let completions = undefined;
      let line = getLine(request);
      let alloyRootPath = util.getAlloyRootPath();
      if (this.regExp.test(line)) {
        completions = [];
        let libPath = path.join(alloyRootPath, 'lib');
        if (util.isExistAsDirectory(libPath)) {
          let files = find.fileSync(/\.js$/, libPath);
          for (let file of Array.from(files)) {
            let prefix = util.getCustomPrefix(request);
            let additionalPrefix = (prefix.startsWith('/')?'':'/');
            
            let value = '/'+file.replace(libPath+path.sep,'').split('.')[0];
            completions.push({ 
              text: value,
              type: 'require',
              replacementPrefix : additionalPrefix + prefix,
              onDidInsertSuggestion({editor, triggerPosition, suggestion}) {
                let targetRange = [
                  [
                    triggerPosition.row, 0
                  ],
                  [triggerPosition.row, triggerPosition.column]
                ];
                let originText = editor.getTextInRange(targetRange);
                if (!(new RegExp(`${suggestion.replacementPrefix}$`)).test(originText)) {
                  return editor.setTextInBufferRange(targetRange, originText.replace(new RegExp(`${prefix}$`), `${value}`));
                }
              }
            });
          }
        }
      }
      return completions;
    }
  },
  {
    regExp : /Alloy\.(createController|Controllers\.instance)\(["']([-a-zA-Z0-9-_\/]*)$/,
    getCompletions(request) {
      let completions = undefined;
      let line = getLine(request);
      let alloyRootPath = util.getAlloyRootPath();
      if (this.regExp.test(line)) {
        completions = [];
        let controllerPath = path.join(alloyRootPath,'controllers');
        console.log(request);
        if (util.isExistAsDirectory(controllerPath)) {
          let files = find.fileSync(/\.js$/, controllerPath);
          for (let file of Array.from(files)) {
            // if currentPath != file # exclude current controller
            let prefix = util.getCustomPrefix(request);
            let additionalPrefix = (prefix.startsWith('/')?'':'/');

            let value = '/'+file.replace(controllerPath+path.sep,'').split('.')[0];
            completions.push({ 
              text: value,
              type: 'require',
              replacementPrefix : additionalPrefix + prefix,
              onDidInsertSuggestion({editor, triggerPosition, suggestion}) {
                let targetRange = [
                  [
                    triggerPosition.row, 0
                  ],
                  [triggerPosition.row, triggerPosition.column]
                ];
                let originText = editor.getTextInRange(targetRange);
                if (!(new RegExp(`${suggestion.replacementPrefix}$`)).test(originText)) {
                  return editor.setTextInBufferRange(targetRange, originText.replace(new RegExp(`${prefix}$`), `${value}`));
                }
              }
            });
          }
        }
      }
              // replacementPrefix : "#{request.prefix}",
              // onDidInsertSuggestion : ({editor, triggerPosition, suggestion}) ->
              //   targetRange = [[triggerPosition.row,0 ],[triggerPosition.row, triggerPosition.column]]
              //   originText = editor.getTextInRange targetRange
              //   if !(new RegExp("#{suggestion.replacementPrefix}$")).test(originText)
              //     editor.setTextInBufferRange targetRange, originText.replace(new RegExp("#{prefix}$"),"#{value}")
      
      return completions;
    }
  },
  {
    regExp : /Alloy\.(createWidget|Widgets\.instance)\(["']([-a-zA-Z0-9-_\/\.]*)$/,
    getCompletions(request) {
      let completions = undefined;
      let line = getLine(request);
      let alloyRootPath = util.getAlloyRootPath();
      if (this.regExp.test(line)) {
        completions = [];
        let alloyConfigPath = path.join(alloyRootPath,'config.json');
        try {
          let configObj = JSON.parse(fs.readFileSync(alloyConfigPath));
          for (let widgetName in (configObj != null ? configObj.dependencies : undefined)) {
            let value = (configObj != null ? configObj.dependencies : undefined)[widgetName];
            completions.push({
              text : widgetName,
              type : 'require',
              replacementPrefix : util.getCustomPrefix(request)
            });
          }
        } catch (error) {}
      }
      return completions;
    }
  },
  {
    regExp : /Alloy\.(createModel|Models\.instance|createCollection|Collections\.instance)\(["']([-a-zA-Z0-9-_\/]*)$/,
    getCompletions(request) {
      let completions = undefined;
      let line = getLine(request);
      let alloyRootPath = util.getAlloyRootPath();
      if (this.regExp.test(line)) {
        completions = [];
        let controllerPath = path.join(alloyRootPath,'models');
        if (util.isExistAsDirectory(controllerPath)) {
          let files = find.fileSync(/\.js$/, controllerPath);
          for (let file of Array.from(files)) {
            // if currentPath != file # exclude current controller
            completions.push({ 
              text: file.replace(controllerPath+'/','').split('.')[0],
              type: 'require',
              replacementPrefix : util.getCustomPrefix(request)
            });
          }
        }
      }
      return completions;
    }
  },
  { //event name
    regExp : /\$\.([-a-zA-Z0-9-_]*)\.(add|remove)EventListener\(["']([-a-zA-Z0-9-_\/]*)$/,
    getCompletions(request) {
      let completions = undefined;
      let line = getLine(request);
      
      let tiCompletions = require('../tiCompletions');
      let regResult = this.regExp.exec(line);
      if (regResult) {
        let idName = regResult[1];
        let sourceEditor = util.getFileEditor(related.getTargetPath('xml'));
        
        if(!sourceEditor.isEmpty()) {
          completions = [];
          let curTagName = '';
          sourceEditor.scan(new RegExp(`id=[\"']${idName}[\"']`,'g'), function(item) { 
            curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
            return item.stop();
          });
          
          if (curTagName && tiCompletions.tags[curTagName]) {
            let { apiName } = tiCompletions.tags[curTagName];
            let curTagObject = tiCompletions.types[apiName];
            _.each(curTagObject.events, value=>
              completions.push({
                type: 'event',
                text: value,
                rightLabel: `<${curTagName}>`
              })
            );
          }
        }
      }
        
      return completions;
    }
  },
  { // value
    regExp : /\$\.([-a-zA-Z0-9-_]*)\.([-a-zA-Z0-9-_\/]*)\s*=\s*([-a-zA-Z0-9-_\/]*)$/,
    getCompletions(request) {
      let tiCompletions = require('../tiCompletions');
      let completions = undefined;
      let line = getLine(request);
      
      let regResult = this.regExp.exec(line);
      if (regResult) {
        let idName = regResult[1];
        let propertyName = regResult[2];
        let sourceEditor = util.getFileEditor(related.getTargetPath('xml'));
        if(!sourceEditor.isEmpty()) {
          completions = [];
          let curTagName = '';
          sourceEditor.scan(new RegExp(`id=[\"']${idName}[\"']`,'g'), function(item) { 
            curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
            return item.stop();
          });
            
          
          if (curTagName && tiCompletions.tags[curTagName]) {
            let { apiName } = tiCompletions.tags[curTagName];
            let curTagObject = tiCompletions.types[apiName];
        
            _.each(tiCompletions.properties[propertyName] != null ? tiCompletions.properties[propertyName].values : undefined, function(value){
              let iconHTML;
              let valueInfo = value.split('|');
              if (valueInfo[1] === 'deprecated') {
                // rightLabel = undefined
                iconHTML = '<i class="text-error icon-circle-slash"></i>';
              }
                
              return completions.push({
                type: 'value',
                text: valueInfo[0],
                iconHTML,
                // leftLabel: rightLabel
                rightLabel: _.contains(curTagObject.properties,propertyName) ? `<${curTagName}>` : "",
                description: `value of '${propertyName}', property`,
                priority : valueInfo[1]==='deprecated' ? -1 : 0
              });
            });
          }
        }
      }
        
      return completions;
    }
  },
  alloyCompletionRules.i18n,
  alloyCompletionRules.path,
  alloyCompletionRules.cfg
];

export default {
  // This will work on JavaScript and CoffeeScript files, but not in js comments.
  selector: '.source.js, .source.coffee',
  disableForSelector: '.source.js .comment',
  filterSuggestions: true,

  // This will take priority over the default provider, which has a priority of 0.
  // `excludeLowerPriority` will suppress any providers with a lower priority
  // i.e. The default provider will be suppressed
  // inclusionPriority: 1
  // excludeLowerPriority: true
  completions : undefined,
  
  loadCompletions() {
    return this.completions = require('../tiCompletions');
  },
  // Required: Return a promise, an array of suggestions, or null.
  getSuggestions(request) {
    let sourceEditor;
    if (!this.completions) {
      this.loadCompletions();
    }
    let {editor, bufferPosition, scopeDescriptor, prefix} = request;
    // return unless prefix?.length
    
    let completions = [];
    
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
    
    // if(@isPropertyNameCompletion()){
    if (alloyIdNamePattern.test(line)) { // id name
      sourceEditor = util.getFileEditor(related.getTargetPath('xml'));
      if(!sourceEditor.isEmpty()) {
        sourceEditor.scan(/id="(.*?)"/g, item => 
          completions.push({
            type: '#',
            text: item.match[1]
            // description: item.match[1]'class definition'
          })
        );
      }
    } else if (alloyIdMemberPattern.test(line)) {
      let idName = alloyIdMemberPattern.exec(line)[1];
      sourceEditor = util.getFileEditor(related.getTargetPath('xml'));
      
      if(!sourceEditor.isEmpty()) {
        let curTagName = '';
        sourceEditor.scan(new RegExp(`id=[\"']${idName}[\"']`,'g'), function(item) { 
          curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
          return item.stop();
        });
        
        if (curTagName && this.completions.tags[curTagName]) {
          let { apiName } = this.completions.tags[curTagName];
          let curTagObject = this.completions.types[apiName];
          if (curTagObject) {
            _.each(curTagObject.functions, value=>
              completions.push({
                type: 'function',
                displayText: `${value}`,
                snippet: `${value}(\${1})\${0}`,
                rightLabel: `<${curTagName}>`
              })
            );
              
            _.each(curTagObject.properties, value=>
              completions.push({
                type: 'attribute',
                text: value,
                rightLabel: `<${curTagName}>`
              })
            );
          }
        }
      }
    } else { 
      let ruleResult;
      for (let rule of Array.from(customAlloyCompletionRules)) {
        ruleResult = rule.getCompletions(request);
        if (ruleResult) { break; }
      }
      completions = ruleResult || this.getPropertyNameCompletions(request);
    }
    
    if (completions != null) {
      completions.sort(util.completionSortFun);
    }
    // for item in api.types
    //   # continue unless prefix and firstCharsEqual(item.name, prefix)
    //   
    //   completions.push {
    //     text : item.name
    //     description : item.description.replace tagRegExp, ""
    //     type : "object"
    //   }
    //   
    //   for func in item.functions
    //     completions.push {
    //       text : item.name+'.'+func.name
    //       description : func.description.replace tagRegExp, ""
    //       type : "function"
    //     }
    //       
    //     
    //     
    //     # replacementPrefix : prefix
    
    
    // completions.sort(ascendingPrefixComparator)

    return new Promise(function(resolve) {
      return resolve(completions);
    });
  },
  
  isPropertyNameCompletion() {}, 
    
  
  getPropertyNamePrefix(bufferPosition, editor) {
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
    return __guard__(propertyNamePrefixPattern.exec(line), x => x[1]);
  },
    
    
  getPropertyNameCompletions({bufferPosition, editor, scopeDescriptor, activatedManually}, candidateProperties) {
    // Don't autocomplete property names in SASS on root level
    let scopes = scopeDescriptor.getScopesArray();
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
    // return [] if hasScope(scopes, 'source.sass') and not line.match(/^(\s|\t)/)

    let prefix = this.getPropertyNamePrefix(bufferPosition, editor);
    if (!activatedManually && !prefix) { return null; }

    let completions = [];
    candidateProperties = candidateProperties || this.completions.properties;
    for (let property in candidateProperties) {
      // jsObjectTypes = ['Font']
      // if jsObjectTypes.indexOf(@properties[property].type) > -1
      //   completions.push
      //     type: 'property'
      //     snippet: "#{property}: {\n\t\${1}\t\n}"
      //     displayText: property
      //     description: options.description
      // else  
      let options = candidateProperties[property];
      if (!prefix || firstCharsEqual(property, prefix)) {
        completions.push({
          type: 'property',
          text: `${property}`,
          displayText: property,
          replacementPrefix: prefix,
          description: options.description
          // descriptionMoreURL: "#{cssDocsURL}/#{propertyName}"
        });
      }
    }
    
    return completions;
  },
    
  // (optional): called _after_ the suggestion `replacementPrefix` is replaced
  // by the suggestion `text` in the buffer
  onDidInsertSuggestion({editor, triggerPosition, suggestion}) {
    suggestion.onDidInsertSuggestion && suggestion.onDidInsertSuggestion({editor, triggerPosition, suggestion});
    if (suggestion.type === 'property') { return setTimeout(this.triggerAutocomplete.bind(this, editor), 1); }
  },

  // (optional): called when your provider needs to be cleaned up. Unsubscribe
  // from things, kill any processes, etc.
  dispose() {},
  
  getPrefix(editor, bufferPosition) {
    // Whatever your prefix regex might be
    let regex = /[\w0-9_-]+$/;

    // Get the text for the line up to the triggered buffer position
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);

    // Match the regex to the line, and return the match
    return __guard__(line.match(regex), x => x[0]) || '';
  }
};


var firstCharsEqual = (str1, str2) => str1[0].toLowerCase() === str2[0].toLowerCase();

let ascendingPrefixComparator = (a, b) => a.prefix  - b.prefix;

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}
