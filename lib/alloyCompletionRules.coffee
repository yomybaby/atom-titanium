fs = require('fs')
tagRegExp =  /(<([^>]+)>)/ig
util = require './ti-pkg-util'
related = require './related'
_ = require 'underscore'
find = require 'find'
path = require 'path'
parseString = require('xml2js').parseString;
getLine = util.getLine

module.exports = {
  i18n : {
    # regExp : /L\(["']([-a-zA-Z0-9-_\/]*)$/
    regExp : /[:\s=,>\)\("]L\(["']([^\s\\\(\)"':,;<>~!@\$%\^&\*\|\+=\[\]\{\}`\?\…]*)$/
    getCompletions : (request) ->
      completions = undefined
      line = getLine(request)
      alloyRootPath = util.getAlloyRootPath()
      if @regExp.test(line)
        defaultLang = atom.config.get('titanium-alloy.defaultI18nLanguage')
        i18nStringPath = path.join(util.getI18nPath(),defaultLang,"strings.xml")
        
        completions = []
        if util.isExistAsFile(i18nStringPath)
          parseString(util.getFileEditor(i18nStringPath).getText(), (error,result) ->
            _.each(result?.resources?.string || [], (value) ->
              completions.push 
                text: value.$.name
                leftLabel : defaultLang
                rightLabel: value._
                type: 'variable'
                replacementPrefix : util.getCustomPrefix(request)
                description : value._
              
              # completions.push 
              #   snippet: "x${0:#{value._}}#{value.$.name}"
              #   displayText: "#{value._}"
              #   leftLabel : defaultLang
              #   rightLabel: value.$.name
              #   type: 'value'
              #   replacementPrefix : util.getCustomPrefix(request)
              #   
              
              # i18n key finder로 개별 package 고려
              
              )
          )
      return completions
  }
}
