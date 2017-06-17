'use babel'

// This is based on https://github.com/atom/autocomplete-html/blob/master/lib/provider.coffee

import fs from 'fs';
import path from 'path';
import _ from 'underscore';
import util from './ti-pkg-util';
import related from './related';
import find from 'find';
import alloyCompletionRules from './alloyCompletionRules';
let trailingWhitespace = /\s$/;
let attributePattern = /\s+([a-zA-Z][-a-zA-Z]*)\s*=\s*$/;
let tagPattern = /<([a-zA-Z][-a-zA-Z]*)(?:\s|$)/;
let selectorPatterns = {
  id: /\s*(["'])(?=[:.*#a-zA-Z])#(\S*)(\1)\s*(?=:)/g,
  class : /\s*(["'])(?=[:.*#a-zA-Z])\.(\S*)(\1)\s*(?=:)/g
};

export default {
  selector: '.text.alloyxml, .text.xml',
  disableForSelector: 'text.alloyxml .comment',
  filterSuggestions: true,

  getSuggestions(request) {
    if (!this.completions) {
      this.loadCompletions();
    }
    let scopes = request.scopeDescriptor.getScopesArray();
    let completions = [];
    // if xml start with <Alloy, change grammars to text.alloyxml
    if (scopes.indexOf('text.xml') !== -1) {
      let { editor } = request;
      let lineCnt = editor.getLineCount();
      for (let i = 0, end = lineCnt; i < end; i++) { 
        if (editor.lineTextForBufferRow(i).indexOf('<Alloy') !== -1) {
          editor.setGrammar(atom.grammars.grammarForScopeName('text.alloyxml')); 
          break;
        }
      }
    }
    
    if (this.isAttributeValueStartWithNoPrefix(request)) {
      completions = this.getAttributeValueCompletions(request);
    } else if (this.isAttributeValueStartWithPrefix(request)) {
      let ruleResult = undefined;
      _.find(alloyCompletionRules, function(rule) {
        ruleResult = rule.getCompletions(request);
        return ruleResult;
      });
      if (ruleResult) {
        completions = ruleResult;
      } else {
        completions = this.getAttributeValueCompletions(request);
      }
    } else if (this.isAttributeStartWithNoPrefix(request)) {
      completions = this.getAttributeNameCompletions(request);
    } else if (this.isAttributeStartWithPrefix(request)) {
      completions = this.getAttributeNameCompletions(request);
    } else if (this.isTagStartWithNoPrefix(request)) {
      completions = this.getTagNameCompletions(request);
    } else if (this.isTagStartTagWithPrefix(request)) {
      completions = this.getTagNameCompletions(request);
    }
    
    if (_.isFunction(completions.sort)) { completions.sort(util.completionSortFun); }
    return completions;
  },

  onDidInsertSuggestion({editor, triggerPosition, suggestion}) {
      suggestion.onDidInsertSuggestion && suggestion.onDidInsertSuggestion({editor, triggerPosition, suggestion});
      
    if (suggestion.type === 'attribute') { return setTimeout(this.triggerAutocomplete.bind(this, editor), 1); }
  },
        
  triggerAutocomplete(editor) {
    return atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', {activatedManually: false});
  },

  isOutsideOfTag({prefix, scopeDescriptor, editor, bufferPosition}) {
    let scopes = scopeDescriptor.getScopesArray();
    if (scopes.length === 1) {
      let previoudChar = editor.getTextInRange([[bufferPosition.row, bufferPosition.column - 1], bufferPosition]);
      return (scopes[0] === 'text.alloyxml') && (previoudChar !== "<");
    } else {
      return false;
    }
  },
      
  isTagStartWithNoPrefix({prefix, scopeDescriptor}) {
    let scopes = scopeDescriptor.getScopesArray();
    if ((prefix === '<') && (scopes.length === 1)) {
      return scopes[0] === 'text.alloyxml';
    } else if ((prefix === '<') && (scopes.length === 2)) {
      return (scopes[0] === 'text.alloyxml') && (scopes[1] === 'meta.scope.outside-tag.html');
    } else {
      return false;
    }
  },

  isTagStartTagWithPrefix({prefix, scopeDescriptor}) {
    if (!prefix) { return false; }
    if (trailingWhitespace.test(prefix)) { return false; }
    return this.hasTagScope(scopeDescriptor.getScopesArray());
  },

  isAttributeStartWithNoPrefix({prefix, scopeDescriptor}) {
    if (!trailingWhitespace.test(prefix)) { return false; }
    return this.hasTagScope(scopeDescriptor.getScopesArray());
  },

  isAttributeStartWithPrefix({prefix, scopeDescriptor, bufferPosition, editor}) {
    if (!prefix) { return false; }
    if (trailingWhitespace.test(prefix)) { return false; }

    let scopes = scopeDescriptor.getScopesArray();
    if (scopes.indexOf('entity.other.attribute-name.html') !== -1) { return true; }
    
    let previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - 1)];
    let previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition);
    let previousScopesArray = previousScopes.getScopesArray();
    if (previousScopesArray.indexOf('entity.other.attribute-name.html') !== -1) { return true; }
    
    if (!this.hasTagScope(scopes)) { return false; }

    return (scopes.indexOf('punctuation.definition.tag.html') !== -1) ||
      (scopes.indexOf('punctuation.definition.tag.end.html') !== -1);
  },

  isAttributeValueStartWithNoPrefix({scopeDescriptor, prefix}) {
    let lastPrefixCharacter = prefix[prefix.length - 1];
    if (!['"', "'"].includes(lastPrefixCharacter)) { return false; }
    let scopes = scopeDescriptor.getScopesArray();
    return this.hasStringScope(scopes) && this.hasTagScope(scopes);
  },

  isAttributeValueStartWithPrefix({scopeDescriptor, prefix}) {
    let lastPrefixCharacter = prefix[prefix.length - 1];
    if (['"', "'"].includes(lastPrefixCharacter)) { return false; }
    let scopes = scopeDescriptor.getScopesArray();
    return this.hasStringScope(scopes) && this.hasTagScope(scopes);
  },

  hasTagScope(scopes) {
    return (scopes.indexOf('meta.tag.any.html') !== -1) ||
      (scopes.indexOf('meta.tag.other.html') !== -1) ||
      (scopes.indexOf('meta.tag.block.any.html') !== -1) ||
      (scopes.indexOf('meta.tag.inline.any.html') !== -1) ||
      (scopes.indexOf('meta.tag.structure.any.html') !== -1);
  },

  hasStringScope(scopes) {
    return (scopes.indexOf('string.quoted.double.html') !== -1) ||
      (scopes.indexOf('string.quoted.single.html') !== -1);
  },

  getTagNameCompletions({prefix, editor, bufferPosition}) {
    let completions = [];
    
    // Get the text for the line up to the triggered buffer position
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
    
    let isClosing = new RegExp(`</${prefix}$`).test(line);
    for (let tag in this.completions.tags) {
      if (!prefix || firstCharsEqual(tag, prefix)) {
        completions.push(
          isClosing
          ? this.buildCloseTagCompletion(tag, this.completions.tags[tag])
          : this.buildTagCompletion(tag, this.completions.tags[tag])
        );
      }
    }
    return completions;
  },

  buildTagCompletion(tag, tagObj) {
    return {
      snippet: `${tag}$1>$2</${tag}>`,
      displayText: tag,
      type: 'tag',
      description: tagObj.apiName
    };
  }, //"HTML <#{tag}> tag"
    // descriptionMoreURL: @getTagDocsURL(tag)
  
  buildCloseTagCompletion(tag, tagObj) {
    return {
      text: `${tag}>`,
      displayText: tag,
      type: 'tag',
      description: tagObj.apiName
    };
  }, //"HTML <#{tag}> tag"
    // descriptionMoreURL: @getTagDocsURL(tag)

  getAttributeNameCompletions({editor, bufferPosition, prefix}) {
    let completions = [];
    let tag = this.getPreviousTag(editor, bufferPosition);
    let tagAttributes = this.getTagAttributes(tag).concat(['id','class','platform','bindId']);
    
    // tag attributes
    for (let attribute of Array.from(tagAttributes)) {
      if (!prefix || firstCharsEqual(attribute, prefix)) {
        completions.push(this.buildAttributeCompletion(attribute, tag));
      }
    }

    // events
    let events = __guard__(this.completions.types[this.completions.tags[tag] != null ? this.completions.tags[tag].apiName : undefined], x => x.events) || {};
    for (let event of  Array.from(events)) {
      if (!prefix || firstCharsEqual(`on${capitalizeFirstLetter(event)}`, prefix)) {
        completions.push(this.buildAttributeCompletion(`on${capitalizeFirstLetter(event)}`, tag, event));
      }
    }

    //# global properties ..
    // for attribute, options of @completions.properties when not prefix or firstCharsEqual(attribute, prefix)
    //   completions.push(@buildAttributeCompletion(attribute)) if options.global
    
    return completions;
  },

  buildAttributeCompletion(attribute, tag, event) {
    if (event != null) {
      return {
        snippet: `${attribute}=\"$1\"$0`,
        displayText: attribute,
        type: 'function',
        iconHTML: '<i class="icon-zap"></i>',
        rightLabel: `<${tag}>`,
        description: `${event} event of <${tag}>`
      };
      // descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)
    } else if (tag != null) {
      return {
        snippet: `${attribute}=\"$1\"$0`,
        displayText: attribute,
        type: 'attribute',
        rightLabel: `<${tag}>`,
        description: `${attribute} attribute to <${tag}> tags`
      };
      // descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)
    } else {
      return {
        snippet: `${attribute}=\"$1\"$0`,
        displayText: attribute,
        type: 'attribute'
      };
    }
  },
      // description:"Global #{attribute} attribute"
      // descriptionMoreURL: @getGlobalAttributeDocsURL(attribute)

  getAttributeValueCompletions({editor, bufferPosition, prefix}) {
    let value, values;
    let tag = this.getPreviousTag(editor, bufferPosition);
    let attribute = this.getPreviousAttribute(editor, bufferPosition);
    let currentPath  = atom.workspace.getActiveTextEditor().getPath();
    let currentControllerName = path.basename(currentPath, path.extname(currentPath));
    let completions = [];
    
    // realted .tss 
    if ((attribute === 'id') || (attribute === 'class')) {
      let fileName;
      let sourceEditor = util.getFileEditor(related.getTargetPath('tss'));
      if(!sourceEditor.isEmpty()) {
        values = tokenTextForSelector(sourceEditor, attribute);
        fileName = _.last(sourceEditor.getPath().split('/'));
        for (value of Array.from(values)) {
          if (!prefix || firstCharsEqual(value, prefix)) {
            completions.push(this.buildStyleSelectorCompletion(attribute, value, fileName));
          }
        }
      }
        
      // app.tss 
      sourceEditor = util.getFileEditor(path.join(util.getTiProjectRootPath(),'app','styles','app.tss'));
      if(!sourceEditor.isEmpty()) {
        values = tokenTextForSelector(sourceEditor, attribute);
        fileName = _.last(sourceEditor.getPath().split('/'));
        for (value of Array.from(values)) {
          if (!prefix || firstCharsEqual(value, prefix)) {
            completions.push(this.buildStyleSelectorCompletion(attribute, value, fileName));
          }
        }
      }

    } else if (attribute === 'src') {
      let alloyRootPath = util.getAlloyRootPath();
      if (tag === 'Require') {
        let controllerPath = path.join(alloyRootPath,'controllers');
        if (util.isExistAsDirectory(controllerPath)) {
          let files = find.fileSync(/\.js$/, controllerPath);
          for (let file of Array.from(files)) {
            if (currentPath !== file) { // exclude current controller
              let prefix = util.getCustomPrefix({bufferPosition,editor});
              let additionalPrefix = (prefix.startsWith('/')?'':'/');
              let value = file.replace(controllerPath,'').split('.')[0];
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
      } else if (tag === 'Widget') {
        if (alloyRootPath) {
          let alloyConfigPath = path.join(alloyRootPath,'config.json');
          try {
            let configObj = JSON.parse(fs.readFileSync(alloyConfigPath));
            for (let widgetName in (configObj != null ? configObj.dependencies : undefined)) {
              value = (configObj != null ? configObj.dependencies : undefined)[widgetName];
              completions.push({
                text : widgetName,
                type : 'require',
                replacementPrefix : util.getCustomPrefix({bufferPosition,editor})
              });
            }
          } catch (e) { 
            return [];
          }
        }
      }
    } else {
      values = this.getAttributeValues(attribute);
      for (value of Array.from(values)) {
        if (!prefix || firstCharsEqual(value, prefix)) {
          value=value.replace(/\"/g,'');
          completions.push(this.buildAttributeValueCompletion(tag, attribute, value));
        }
      }
    }
    
    return completions;
  },
    
  buildStyleSelectorCompletion(attribute, value,fileName) {
    return {
      text : value,
      type : attribute==='id' ? "#" : '.',
      rightLabel : fileName.split('.')[0]
    };
  },
    
  buildAttributeValueCompletion(tag, attribute, value) {
    if (this.completions.properties[attribute] != null ? this.completions.properties[attribute].global : undefined) {
      return {
        text: value,
        type: 'value',
        description: `${value} value for global ${attribute} attribute`
      };
      // descriptionMoreURL: @getGlobalAttributeDocsURL(attribute)
    } else {
      let iconHTML;
      let valueInfo = value.split('|');
      let rightLabel = valueInfo[1];
      if (rightLabel === 'deprecated') {
        // rightLabel = undefined
        iconHTML = '<i class="text-error icon-circle-slash"></i>';
      }
      let description = `value for ${attribute} attribute to <${tag}>`;
      return {
        text: valueInfo[0],
        type: 'value',
        iconHTML,
        description,
        rightLabel,
        priority : valueInfo[1]==='deprecated' ? -1 : 0
        // descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)
      };
    }
  },

  loadCompletions() {
    this.completions = require('../tiCompletions');
    return _.extend( this.completions.properties,{
      id : { 
        description : 'TSS id'
      },
      class : { 
        description : 'TSS class'
      },
      platform : {
        type: "String",
        description : 'Platform condition',
        values : [
          "android",
          "ios",
          "mobileweb",
          "windows"
        ]
      }
    });
  },

  getPreviousTag(editor, bufferPosition) {
    let {row} = bufferPosition;
    while (row >= 0) {
      let tag = __guard__(tagPattern.exec(editor.lineTextForBufferRow(row)), x => x[1]);
      if (tag) { return tag; }
      row--;
    }
  },

  getPreviousAttribute(editor, bufferPosition) {
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]).trim();

    // Remove everything until the opening quote
    let quoteIndex = line.length - 1;
    while (line[quoteIndex] && !(['"', "'"].includes(line[quoteIndex]))) { quoteIndex--; }
    line = line.substring(0, quoteIndex);

    return __guard__(attributePattern.exec(line), x => x[1]);
  },

  getAttributeValues(attribute) {
    attribute = this.completions.properties[attribute];
    return (attribute != null ? attribute.values : undefined) != null ? (attribute != null ? attribute.values : undefined) : [];
  },

  getTagAttributes(tag) {
   return __guard__(this.completions.types[this.completions.tags[tag] != null ? this.completions.tags[tag].apiName : undefined], x => x.properties) != null ? __guard__(this.completions.types[this.completions.tags[tag] != null ? this.completions.tags[tag].apiName : undefined], x => x.properties) : [];
 },

  getTagDocsURL(tag) {
    return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
  },

  getLocalAttributeDocsURL(attribute, tag) {
    return `${this.getTagDocsURL(tag)}#attr-${attribute}`;
  },

  getGlobalAttributeDocsURL(attribute) {
    return `https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/${attribute}`;
  }
};

var firstCharsEqual = function(str1, str2) {
  str1 = str1.replace(/\"/g,'');
  str2 = str2.replace(/\"/g,'');
  return str1[0].toLowerCase() === str2[0].toLowerCase();
};

var capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

var tokenTextForSelector = function(editor, selectorType) {
  let matchingTokens = [];
  editor.scan(selectorPatterns[selectorType],item => matchingTokens.push(item.match[2].split('[')[0]));
  return matchingTokens;
};

let hasScope = (scopesArray, scope) => scopesArray.indexOf(scope) !== -1;

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}
