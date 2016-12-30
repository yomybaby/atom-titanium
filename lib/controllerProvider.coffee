fs = require('fs')
tagRegExp =  /(<([^>]+)>)/ig
util = require './ti-pkg-util'
related = require './related'
_ = require 'underscore'
viewAutoProvider = require './viewProvider';
find = require 'find'
path = require 'path'
parseString = require('xml2js').parseString;
alloyCompletionRules = require './alloyCompletionRules'

propertyNamePrefixPattern = /\.([a-zA-Z]+[-a-zA-Z-_]*)$/
alloyIdNamePattern = /\$\.([-a-zA-Z0-9-_]*)$/
alloyIdMemberPattern = /\$\.([-a-zA-Z0-9-_]*).([-a-zA-Z0-9-_]*)$/

getLine = util.getLine

alloyCompletionRules = [
  {
    regExp: /require\(["']([-a-zA-Z0-9-_\/]*)$/
    getCompletions : (request) ->
      completions = undefined
      line = getLine(request)
      alloyRootPath = util.getAlloyRootPath()
      if @regExp.test(line)
        completions = []
        libPath = path.join(alloyRootPath, 'lib')
        if util.isExistAsDirectory(libPath)
          files = find.fileSync /\.js$/, libPath
          for file in files
            completions.push
              text : file.replace(libPath+path.sep,'').split('.')[0]
              type: 'require',
              replacementPrefix : util.getCustomPrefix(request)
      return completions
  }
  {
    regExp : /Alloy\.(createController|Controllers\.instance)\(["']([-a-zA-Z0-9-_\/]*)$/
    getCompletions : (request) ->
      completions = undefined
      line = getLine(request)
      alloyRootPath = util.getAlloyRootPath()
      if @regExp.test(line)
        completions = []
        controllerPath = path.join(alloyRootPath,'controllers');
        if util.isExistAsDirectory(controllerPath)
          files = find.fileSync /\.js$/, controllerPath
          console.log files
          for file in files
            # if currentPath != file # exclude current controller
            completions.push 
              text: file.replace(controllerPath+path.sep,'').split('.')[0]
              type: 'require',
              replacementPrefix : util.getCustomPrefix(request)
      console.log completions
      return completions
  }
  {
    regExp : /Alloy\.(createWidget|Widgets\.instance)\(["']([-a-zA-Z0-9-_\/\.]*)$/
    getCompletions : (request) ->
      completions = undefined
      line = getLine(request)
      alloyRootPath = util.getAlloyRootPath()
      if @regExp.test(line)
        completions = []
        alloyConfigPath = path.join(alloyRootPath,'config.json')
        try
          configObj = JSON.parse(fs.readFileSync(alloyConfigPath))
          for widgetName, value of configObj?.dependencies
            completions.push
              text : widgetName
              type : 'require'
              replacementPrefix : util.getCustomPrefix(request)
      return completions
  }
  {
    regExp : /Alloy\.(createModel|Models\.instance|createCollection|Collections\.instance)\(["']([-a-zA-Z0-9-_\/]*)$/
    getCompletions : (request) ->
      completions = undefined
      line = getLine(request)
      alloyRootPath = util.getAlloyRootPath()
      if @regExp.test(line)
        completions = []
        controllerPath = path.join(alloyRootPath,'models');
        if util.isExistAsDirectory(controllerPath)
          files = find.fileSync /\.js$/, controllerPath
          for file in files
            # if currentPath != file # exclude current controller
            completions.push 
              text: file.replace(controllerPath+'/','').split('.')[0]
              type: 'require',
              replacementPrefix : util.getCustomPrefix(request)
      return completions
  }
  { #event name
    regExp : /\$\.([-a-zA-Z0-9-_]*)\.(add|remove)EventListener\(["']([-a-zA-Z0-9-_\/]*)$/
    getCompletions: (request) ->
      completions = undefined
      line = getLine(request)
      
      tiCompletions = require('../tiCompletions')
      regResult = @regExp.exec(line)
      if regResult
        idName = regResult[1]
        sourceEditor = util.getFileEditor related.getTargetPath('xml')
        
        if(!sourceEditor.isEmpty())
          completions = []
          curTagName = ''
          sourceEditor.scan new RegExp("id=[\"']#{idName}[\"']",'g'), (item) -> 
            curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
            item.stop();
          
          if curTagName && tiCompletions.tags[curTagName]
            apiName = tiCompletions.tags[curTagName].apiName
            curTagObject = tiCompletions.types[apiName]
            _.each curTagObject.events, (value)->
              completions.push
                type: 'event'
                text: value
                rightLabel: "<#{curTagName}>"
        
      completions
  }
  { # value
    regExp : /\$\.([-a-zA-Z0-9-_]*)\.([-a-zA-Z0-9-_\/]*)\s*=\s*([-a-zA-Z0-9-_\/]*)$/
    getCompletions: (request) ->
      tiCompletions = require('../tiCompletions')
      completions = undefined
      line = getLine(request)
      
      regResult = @regExp.exec(line)
      if regResult
        idName = regResult[1]
        propertyName = regResult[2]
        sourceEditor = util.getFileEditor related.getTargetPath('xml')
        if(!sourceEditor.isEmpty())
          completions = []
          curTagName = ''
          sourceEditor.scan new RegExp("id=[\"']#{idName}[\"']",'g'), (item) -> 
            curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
            item.stop();
            
          
          if curTagName && tiCompletions.tags[curTagName]
            apiName = tiCompletions.tags[curTagName].apiName
            curTagObject = tiCompletions.types[apiName]
        
            _.each tiCompletions.properties[propertyName]?.values, (value)->
              valueInfo = value.split('|')
              if valueInfo[1] is 'deprecated'
                # rightLabel = undefined
                iconHTML = '<i class="text-error icon-circle-slash"></i>'
                
              completions.push
                type: 'value'
                text: valueInfo[0],
                iconHTML: iconHTML
                # leftLabel: rightLabel
                rightLabel: if _.contains(curTagObject.properties,propertyName) then "<#{curTagName}>" else ""
                description: "value of '#{propertyName}', property",
                priority : if valueInfo[1]=='deprecated' then -1 else 0
        
      completions
  }
  alloyCompletionRules.i18n
  alloyCompletionRules.path
  alloyCompletionRules.cfg
]

module.exports =
  # This will work on JavaScript and CoffeeScript files, but not in js comments.
  selector: '.source.js, .source.coffee'
  disableForSelector: '.source.js .comment'
  filterSuggestions: true

  # This will take priority over the default provider, which has a priority of 0.
  # `excludeLowerPriority` will suppress any providers with a lower priority
  # i.e. The default provider will be suppressed
  # inclusionPriority: 1
  # excludeLowerPriority: true
  completions : {}
  
  loadCompletions: () ->
    @completions = require('../tiCompletions');
  # Required: Return a promise, an array of suggestions, or null.
  getSuggestions: (request) ->
    {editor, bufferPosition, scopeDescriptor, prefix} = request
    # return unless prefix?.length
    
    completions = []
    
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    
    # if(@isPropertyNameCompletion()){
    if alloyIdNamePattern.test(line) # id name
      sourceEditor = util.getFileEditor related.getTargetPath('xml')
      if(!sourceEditor.isEmpty())
        sourceEditor.scan /id="(.*?)"/g, (item) -> 
          completions.push({
            type: '#'
            text: item.match[1]
            # description: item.match[1]'class definition'
          })
    else if alloyIdMemberPattern.test(line)
      idName = alloyIdMemberPattern.exec(line)[1]
      sourceEditor = util.getFileEditor related.getTargetPath('xml')
      
      if(!sourceEditor.isEmpty())
        curTagName = '';
        sourceEditor.scan new RegExp("id=[\"']#{idName}[\"']",'g'), (item) -> 
          curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
          item.stop();
        
        if curTagName && @completions.tags[curTagName]
          apiName = @completions.tags[curTagName].apiName
          curTagObject = @completions.types[apiName]
          if curTagObject
            _.each curTagObject.functions, (value)->
              completions.push
                type: 'function'
                displayText: "#{value}"
                snippet: "#{value}(${1})${0}"
                rightLabel: "<#{curTagName}>"
              
            _.each curTagObject.properties, (value)->
              completions.push
                type: 'attribute'
                text: value
                rightLabel: "<#{curTagName}>"
    else 
      for rule in alloyCompletionRules
        ruleResult = rule.getCompletions(request);
        break if ruleResult
      completions = ruleResult || @getPropertyNameCompletions(request)
    
    completions?.sort  util.completionSortFun
    # for item in api.types
    #   # continue unless prefix and firstCharsEqual(item.name, prefix)
    #   
    #   completions.push {
    #     text : item.name
    #     description : item.description.replace tagRegExp, ""
    #     type : "object"
    #   }
    #   
    #   for func in item.functions
    #     completions.push {
    #       text : item.name+'.'+func.name
    #       description : func.description.replace tagRegExp, ""
    #       type : "function"
    #     }
    #       
    #     
    #     
    #     # replacementPrefix : prefix
    
    
    # completions.sort(ascendingPrefixComparator)

    new Promise (resolve) ->
      resolve(completions)
  
  isPropertyNameCompletion : () -> 
    
  
  getPropertyNamePrefix: (bufferPosition, editor) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    propertyNamePrefixPattern.exec(line)?[1]
    
    
  getPropertyNameCompletions: ({bufferPosition, editor, scopeDescriptor, activatedManually}, candidateProperties) ->
    # Don't autocomplete property names in SASS on root level
    scopes = scopeDescriptor.getScopesArray()
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    # return [] if hasScope(scopes, 'source.sass') and not line.match(/^(\s|\t)/)

    prefix = @getPropertyNamePrefix(bufferPosition, editor)
    return null unless activatedManually or prefix

    completions = []
    candidateProperties = candidateProperties || @completions.properties
    for property, options of candidateProperties when not prefix or firstCharsEqual(property, prefix)
      # jsObjectTypes = ['Font']
      # if jsObjectTypes.indexOf(@properties[property].type) > -1
      #   completions.push
      #     type: 'property'
      #     snippet: "#{property}: {\n\t\${1}\t\n}"
      #     displayText: property
      #     description: options.description
      # else  
      completions.push(
        type: 'property'
        text: "#{property}"
        displayText: property
        replacementPrefix: prefix
        description: options.description
        # descriptionMoreURL: "#{cssDocsURL}/#{propertyName}"
      )
    
    completions
    
  # (optional): called _after_ the suggestion `replacementPrefix` is replaced
  # by the suggestion `text` in the buffer
  onDidInsertSuggestion: ({editor, triggerPosition, suggestion}) ->

  # (optional): called when your provider needs to be cleaned up. Unsubscribe
  # from things, kill any processes, etc.
  dispose: ->
  
  getPrefix: (editor, bufferPosition) ->
    # Whatever your prefix regex might be
    regex = /[\w0-9_-]+$/

    # Get the text for the line up to the triggered buffer position
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])

    # Match the regex to the line, and return the match
    line.match(regex)?[0] or ''


firstCharsEqual = (str1, str2) ->
  str1[0].toLowerCase() is str2[0].toLowerCase()  

ascendingPrefixComparator = (a, b) -> a.prefix  - b.prefix
