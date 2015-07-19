'use babel';
/* @flow */

var alloyPathReg = /\/(controllers|views|styles)\/(.*)?\.(.*)/;
var selectorReg =  /(class|id)=\"[\sa-zA-Z-_]*$/; // /(class|id)=\"(.*?)\bmyClass\b(.*?)\"/;
// ref : https://github.com/facebook/nuclide/blob/master/pkg/nuclide/atom-helpers/lib/go-to-location.js
function goToLocation(
    file: string,
    line: number,
    column: number): Promise {
  return atom.workspace.open(file, {initialLine: line, initialColumn: column});
}

function findStyleDefinition(){
  
}

var singleSuggestionProvider = {
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    var matches, selectorMatches, type, result, lineText;
    matches = textEditor.getPath().match(alloyPathReg);
    //TODO: How about use scope instead of `if`? Better?
    if(matches && matches.length){
      type = matches[3];
      
      //console.log(range.start.row);
      console.log(text);
      lineText = textEditor.getTextInBufferRange([[range.start.row,0],[range.start.row,range.start.column]]);
      console.log(lineText);
      // selectorMatches = selectorReg;

      switch(type){
        case 'xml':
          // 1. check the text is class or id or eventHandler 
          selectorMatches=lineText.match(selectorReg);
          console.log(selectorMatches);
          if(selectorMatches){
            result = {
              range,
              callback() {
                var detail = `Text: ${text}\n` +
                    `File: ${textEditor.getPath()}\n` +
                    `Range: ${range}\n` +
                    `Selector : ${selectorMatches[1]}`;
                atom.notifications.addInfo('Hyperclick provider demo', {detail});
              }
            }
          }
          // 2-1. if class or id, find style definition on .tss ()
          // 2-2. if handler, find function definition on .js
          break;
      }
      return result;
      // return {
      //   range,
      //   callback() {
      //     var detail = `Text: ${text}\n` +
      //         `File: ${textEditor.getPath()}\n` +
      //         `Range: ${range}`;
      //     atom.notifications.addInfo('Hyperclick provider demo', {detail});
      //   },
      // };
    }
  },
};

var multiSuggestionProvider = {
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    if (text.startsWith('multi')) {
      var detail = `Text: ${text}\n` +
          `File: ${textEditor.getPath()}\n` +
          `Range: ${range}`;
      return {
        range,
        callback: [
          {
            title: 'success',
            callback() {
              atom.notifications.addSuccess('Hyperclick multi provider demo', {detail});
            },
          },
          {
            title: 'info',
            callback() {
              atom.notifications.addInfo('Hyperclick multi provider demo', {detail});
            },
          },
          {
            title: 'warning',
            callback() {
              atom.notifications.addWarning('Hyperclick multi provider demo', {detail});
            },
          },
          {
            title: 'error',
            callback() {
              atom.notifications.addError('Hyperclick multi provider demo', {detail});
            },
          },
          {
            title: 'fatal error',
            callback() {
              atom.notifications.addFatalError('Hyperclick multi provider demo', {detail});
            },
          },
        ],
      };
    }
  },
  priority: 1,
};

module.exports = {
  getProvider() {
    return [singleSuggestionProvider, multiSuggestionProvider];
  },
};
