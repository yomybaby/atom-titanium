fs = require('fs')
_ = require('underscore');
api = JSON.parse(fs.readFileSync("/usr/local/lib/node_modules/alloy/docs/api.jsca", "utf8"));
tagRegExp =  /(<([^>]+)>)/ig


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

  # Required: Return a promise, an array of suggestions, or null.
  getSuggestions: ({editor, bufferPosition, scopeDescriptor, prefix}) ->
    console.log bufferPosition, prefix, scopeDescriptor
    return unless prefix?.length
    
    completions = []
    
    for item in api.types
      # continue unless prefix and firstCharsEqual(item.name, prefix)
      
      completions.push {
        text : item.name
        description : item.description.replace tagRegExp, ""
        type : "object"
      }
      
      for func in item.functions
        # console.log func.name
        completions.push {
          text : item.name+'.'+func.name
          description : func.description.replace tagRegExp, ""
          type : "function"
        }
          
        
        
        # replacementPrefix : prefix
    
    
    # completions.sort(ascendingPrefixComparator)

    new Promise (resolve) ->
      resolve(completions)

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
