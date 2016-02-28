fs = require 'fs'
path = require 'path'
_ = require 'underscore'
util = require './ti-pkg-util'
related = require './related'

module.exports =
  # This will work on JavaScript and CoffeeScript files, but not in js comments.
  selector: '.source.js, .text.alloyxml, .source.coffee'
  # disableForSelector: '.source.js .comment'

  # This will take priority over the default provider, which has a priority of 0.
  # `excludeLowerPriority` will suppress any providers with a lower priority
  # i.e. The default provider will be suppressed
  inclusionPriority: 1
  # excludeLowerPriority: true

  # Required: Return a promise, an array of suggestions, or null.
  getSuggestions: ({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) ->
    completions = []
    
    basePath = path.join(util.getTiProjectRootPath(),'app','assets');
    completions = @findSuggestionsForPrefix(editor, basePath, prefix )
    new Promise (resolve) ->
      resolve(completions)
  
  # this function based on https://atom.io/packages/autocomplete-paths
  findSuggestionsForPrefix: (editor, basePath, prefix) ->
    return [] unless basePath?

    prefixPath = path.resolve(basePath, prefix)

    if prefix.match(/[/\\]$/)
      directory = prefixPath
      prefix = ''
    else
      if basePath is prefixPath
        directory = prefixPath
      else
        directory = path.dirname(prefixPath)
      prefix = path.basename(prefix)

    # Is this actually a directory?
    try
      stat = fs.statSync(directory)
      return [] unless stat.isDirectory()
    catch e
      return []

    # Get files
    try
      files = fs.readdirSync(directory)
    catch e
      return []
    
    # results = fuzzaldrin.filter(files, prefix)

    suggestions = for result in files
      resultPath = path.resolve(directory, result)

      # Check for type
      try
        stat = fs.statSync(resultPath)
      catch e
        continue
      if stat.isDirectory()
        label = 'Dir'
      else if stat.isFile()
        label = 'File'
      else
        continue

      suggestion =
        word: result
        prefix: prefix
        label: label
        data:
          body: result
      
      # if suggestion.label isnt 'File'
      #   suggestion.onDidConfirm = ->
      #     atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate')

      suggestion
    return suggestions
    
  # (optional): called _after_ the suggestion `replacementPrefix` is replaced
  # by the suggestion `text` in the buffer
  onDidInsertSuggestion: ({editor, triggerPosition, suggestion}) ->

  # (optional): called when your provider needs to be cleaned up. Unsubscribe
  # from things, kill any processes, etc.
  dispose: ->
