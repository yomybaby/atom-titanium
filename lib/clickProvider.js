'use babel';
/* @flow */

var singleSuggestionProvider = {
  getSuggestionForWord(textEditor: TextEditor, text: string, range: Range): HyperclickSuggestion {
    return {
      range,
      callback() {
        var detail = `Text: ${text}\n` +
            `File: ${textEditor.getPath()}\n` +
            `Range: ${range}`;
        atom.notifications.addInfo('Hyperclick provider demo', {detail});
      },
    };
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
