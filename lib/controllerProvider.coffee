fs = require('fs')
tagRegExp =  /(<([^>]+)>)/ig
util = require './ti-pkg-util'
related = require './related'
_ = require 'underscore'
viewAutoProvider = require './viewProvider';

propertyNamePrefixPattern = /\.([a-zA-Z]+[-a-zA-Z-_]*)$/
alloyIdNamePattern = /\$\.([-a-zA-Z0-9-_]*)$/
alloyIdMemberPattern = /\$\.([-a-zA-Z0-9-_]*).([-a-zA-Z0-9-_]*)$/

module.exports =
  # This will work on JavaScript and CoffeeScript files, but not in js comments.
  selector: '.source.js, .source.coffee'
  disableForSelector: '.source.js .comment'
  filterSuggestions: true

  # This will take priority over the default provider, which has a priority of 0.
  # `excludeLowerPriority` will suppress any providers with a lower priority
  # i.e. The default provider will be suppressed
  inclusionPriority: 1
  # excludeLowerPriority: true
  completions : {}
  
  loadCompletions: () ->
    @completions = require('../tiCompletions');
  # Required: Return a promise, an array of suggestions, or null.
  getSuggestions: (request) ->
    {editor, bufferPosition, scopeDescriptor, prefix} = request
    return unless prefix?.length
    
    completions = []
    
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    
    # if(@isPropertyNameCompletion()){
    console.log alloyIdNamePattern.test(line)
    console.log alloyIdNamePattern.exec(line)
    console.log line
    if alloyIdNamePattern.test(line) # id name
      sourceEditor = util.getFileEditor related.getTargetPath('xml')
      if(!sourceEditor.isEmpty())
        sourceEditor.scan /id="(.*?)"/g, (item) -> 
          # console.log item.match[1]
          completions.push({
            type: '#'
            text: item.match[1]
            # description: item.match[1]'class definition'
          })
    else if alloyIdMemberPattern.test(line)
      idName = alloyIdMemberPattern.exec(line)[1]
      console.log ('View lets find tag name');
      sourceEditor = util.getFileEditor related.getTargetPath('xml')
      
      if(!sourceEditor.isEmpty())
        curTagName = '';
        sourceEditor.scan new RegExp("id=[\"']#{idName}[\"']",'g'), (item) -> 
          curTagName = viewAutoProvider.getPreviousTag(sourceEditor,item.range.start);
          item.stop();
        
        if curTagName
          apiName = @completions.tags[curTagName].apiName
          curTagObject = @completions.types[apiName]
          _.each curTagObject.functions, (value)->
            completions.push
              type: 'function'
              text: value
              rightLabel: "<#{curTagName}>"
            
          _.each curTagObject.properties, (value)->
            completions.push
              type: 'attribute'
              text: value
              rightLabel: "<#{curTagName}>"
    else
      completions = @getPropertyNameCompletions(request)
    
    # else if(@isAlloyIdCompletion()){
    #   
    # }
    
    
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
