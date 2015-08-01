'use babel';
/* @flow */

var related = require('./related');
var fs = require('fs');
var _ = require('underscore');

var alloyPathReg = /\/(controllers|views|styles)\/(.*)?\.(.*)/;
var selectorReg =  /(class|id)=(\"|\')[\sa-zA-Z-_^]*$/; 


var suggestionProvider = {
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    var matches, selectorMatches, type, result, lineText;
    var findPosArr = [];
    
    matches = textEditor.getPath().match(alloyPathReg);
    //TODO: How about use scope instead of `if`? Better?
    if(matches && matches.length && !text.startsWith('"')){
      type = matches[3];
      
      lineText = textEditor.getTextInBufferRange([[range.start.row,0],[range.start.row,range.start.column]]);
      console.log(lineText); 

      switch(type){
        case 'xml':
          // 1. check the text is class or id or eventHandler 
          
          // 2-1. if class or id, find style definition on .tss ()
          selectorMatches=lineText.match(selectorReg);
          console.log(selectorMatches);
          if(selectorMatches){ 
            // tss 파일을 열어서 선언된 부분의 lineNumber와 cloumn 을 파악
            var styleFilePath = related.getTargetPath('tss');
            
            var editors = atom.workspace.getTextEditors();
            var editor = _.find(editors, (editor) => {
              return editor.getPath() === styleFilePath;
            });
            
            // TODO : spport tag name
            var selectorRegEx = new RegExp( (selectorMatches[1]==='id'?'#':'\.')+text, 'g');
            if(editor){ // when target file already opened 
              var position = editor.scan(selectorRegEx, function(obj){
                findPosArr.push({
                  text: obj.lineText.replace(/\:.*/,'').replace(/"/g,''),
                  row: obj.range.start.row
                });
              });
            }else{ // taget file not open yet 
              
              var contents = fs.readFileSync(styleFilePath, {encoding: 'Utf-8'});
              
              var lines = contents.split(/\n/g);
              
              lines.forEach( (line,idx) => {
                if(line.match(selectorRegEx)){
                  findPosArr.push({
                    row : idx,
                    text : line
                  });
                }
              });
            }

            if(findPosArr.length){
              
              if(findPosArr.length == 1){
                result = {
                  range,
                  callback() {
                    related.openFile('tss',{initialLine: findPosArr[0].row, initialColumn: 0});
                  }
                }
              }else{
                result = {
                  range,
                  callback : _.map(findPosArr, (item) => {
                    return {
                      title : item.text,
                      callback() {
                        related.openFile('tss',{initialLine: item.row, initialColumn: 0});
                      }
                    }
                  })
                }
                
              }
            }else{
              result = {
                range,
                callback() {
                  related.openFile('tss',{initialLine: Number.MAX_VALUE , initialColumn: 0})
                }
              }
            }
          }
          // 2-2. if handler, find function definition on .js
          break;
      }
      
      return result;
    }
  },
};

module.exports = {
  getProvider() {
    return [suggestionProvider];
  },
};
