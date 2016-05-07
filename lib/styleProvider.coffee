fs = require 'fs'
path = require 'path'
_ = require 'underscore'
util = require './ti-pkg-util'
related = require './related'

propertyNameWithColonPattern = /^\s*(\S+)\s*:/
objectNameWithColonPattern = /^\s*(\S+)\s*:\s*\{/
propertyNamePrefixPattern = /[a-zA-Z]+[-a-zA-Z]*$/
pesudoSelectorPrefixPattern = /:(:)?([a-z]+[a-z-]*)?$/
tagSelectorPrefixPattern = /["']([A-Za-z]+)?$/
importantPrefixPattern = /(![a-z]+)$/
cssDocsURL = "http://docs.appcelerator.com/platform/latest/#!/api"

alloyCompletionRules = require './alloyCompletionRules'
module.exports =
  selector: '.source.css.tss'  
  # disableForSelector: '.source.css.tss .comment, .source.css.tss .string'

  # Tell autocomplete to fuzzy filter the results of getSuggestions(). We are
  # still filtering by the first character of the prefix in this provider for
  # efficiency.
  filterSuggestions: true

  getSuggestions: (request) ->
    console.log request if atom.inDevMode()
    completions = null
    scopes = request.scopeDescriptor.getScopesArray()
    
    # for key & value
    
    if @isCompletingValue(request)
      ruleResult = undefined
      _.find(alloyCompletionRules, (rule) ->
        ruleResult = rule.getCompletions(request);
        return ruleResult;
      )
      if ruleResult
        completions = ruleResult
      else
        completions = @getPropertyValueCompletions(request)
    # # else if @isCompletingPseudoSelector(request)
    # #   comfpletions = @getPseudoSelectorCompletions(request)
    else if @isCompletingName(request)
      completions = @getPropertyNameCompletions(request)
    
    # for Selector
    else if @isCompletingClassName(request)
      # find class names from view(xml)
      # filter using request.prefix
      completions = []
      sourceEditor = util.getFileEditor related.getTargetPath('xml')
      if(!sourceEditor.isEmpty())
        sourceEditor.scan /class="(.*?)"/g, (item) -> 
          _.each item.match[1].split(' '), (className)->
            completions.push({
              type: '.'
              text: className
              # description: item.match[1]'class definition'
            })
      
      
    else if @isCompletingIdName(request)
      # find class names from view(xml)
      # filter using request.prefix
      completions = []
      sourceEditor = util.getFileEditor related.getTargetPath('xml')
      if(!sourceEditor.isEmpty())
        sourceEditor.scan /id="(.*?)"/g, (item) -> 
          completions.push({
            type: '#'
            text: item.match[1]+'"',
            displayText : item.match[1]
            # description: item.match[1]'class definition'
          })
      
    else if @isCompletingTagSelector(request)
      tagCompletions = @getTagCompletions(request)
      if tagCompletions?.length
        completions ?= []
        completions = completions.concat(tagCompletions)

    completions?.sort util.completionSortFun
    completions
    
  onDidInsertSuggestion: ({editor, triggerPosition, suggestion}) ->
    suggestion.onDidInsertSuggestion and suggestion.onDidInsertSuggestion({editor, triggerPosition, suggestion})
    setTimeout(@triggerAutocomplete.bind(this, editor), 1) if suggestion.type is 'property'

  triggerAutocomplete: (editor) ->
    atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', {activatedManually: false})

  loadProperties: ->
    @properties = {}
    {@pseudoSelectors, @properties, @tags, @types} = require('../tiCompletions')
  
  isCompletingClassName : ({scopeDescriptor, bufferPosition, prefix, editor}) ->
    previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - 1)]
    previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition)
    previousScopesArray = previousScopes.getScopesArray()

    (hasScope(previousScopesArray, 'entity.other.attribute-name.class.css.tss'))
  
  isCompletingIdName : ({scopeDescriptor, bufferPosition, prefix, editor}) ->
    previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - 1)]
    previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition)
    previousScopesArray = previousScopes.getScopesArray()

    (hasScope(previousScopesArray, 'entity.other.attribute-name.id.css.tss'))
    
  isCompletingValue: ({scopeDescriptor, bufferPosition, prefix, editor}) ->
    scopes = scopeDescriptor.getScopesArray()
    
    previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - prefix.length - 1)]
    previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition)
    previousScopesArray = previousScopes.getScopesArray()
    
    lastValueScopeIndex = _.lastIndexOf(scopes,'meta.property-value.css.tss')
    lastListScopeIndex = _.lastIndexOf(scopes,'meta.property-list.css.tss')
    
    (hasScope(scopes, 'meta.property-value.css.tss') and not hasScope(scopes, 'punctuation.terminator.rule.css.tss')) and lastListScopeIndex < lastValueScopeIndex

  isCompletingName: ({scopeDescriptor, bufferPosition, prefix, editor}) ->
    scopes = scopeDescriptor.getScopesArray()
    
    lineLength = editor.lineTextForBufferRow(bufferPosition.row).length
    isAtTerminator = prefix.endsWith(',')
    # isAtParentSymbol = prefix.endsWith('&')
    isInPropertyList = not isAtTerminator and
      hasScope(scopes, 'meta.property-list.css.tss')

    return false unless isInPropertyList
    # return false if isAtParentSymbol

    previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - prefix.length - 1)]
    previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition)
    previousScopesArray = previousScopes.getScopesArray()
    # 
    return false if hasScope(previousScopesArray, 'entity.other.attribute-name.class.css.tss') or
      hasScope(previousScopesArray, 'entity.other.attribute-name.id.css.tss') or
      # hasScope(previousScopesArray, 'entity.other.attribute-name.id.tss') or
      # hasScope(previousScopesArray, 'entity.other.attribute-name.parent-selector.css.tss') or

    isAtBeginScopePunctuation = hasScope(scopes, 'punctuation.section.property-list.begin.css')
      # or hasScope(scopes, 'punctuation.section.property-list.begin.scss')
    isAtEndScopePunctuation = hasScope(scopes, 'punctuation.section.property-list.end.css')
      # or hasScope(scopes, 'punctuation.section.property-list.end.scss')

    if isAtBeginScopePunctuation
      # * Disallow here: `canvas,|{}`
      # * Allow here: `canvas,{| }`
      prefix.endsWith('{')
    else if isAtEndScopePunctuation
      # * Disallow here: `canvas,{}|`
      # * Allow here: `canvas,{ |}`
      not prefix.endsWith('}')
    else
      true

  isCompletingNameOrTag: ({scopeDescriptor, bufferPosition, editor}) ->
    scopes = scopeDescriptor.getScopesArray()
    prefix = @getPropertyNamePrefix(bufferPosition, editor)
    return @isPropertyNamePrefix(prefix) and
      hasScope(scopes, 'meta.selector.css') and
      not hasScope(scopes, 'entity.other.attribute-name.id.css.sass') and
      not hasScope(scopes, 'entity.other.attribute-name.class.sass')

  isCompletingTagSelector: ({editor, scopeDescriptor, bufferPosition}) ->
    scopes = scopeDescriptor.getScopesArray()
    tagSelectorPrefix = @getTagSelectorPrefix(editor, bufferPosition)
    return false unless tagSelectorPrefix?.length
    if hasScope(scopes, 'meta.selector.css.tss')
      true
    else
      false

  isCompletingPseudoSelector: ({editor, scopeDescriptor, bufferPosition}) ->
    scopes = scopeDescriptor.getScopesArray()
    if hasScope(scopes, 'meta.selector.css') and not hasScope(scopes, 'source.sass')
      true
    else if hasScope(scopes, 'source.css.scss') or hasScope(scopes, 'source.css.less') or hasScope(scopes, 'source.sass')
      prefix = @getPseudoSelectorPrefix(editor, bufferPosition)
      if prefix
        previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - prefix.length - 1)]
        previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition)
        previousScopesArray = previousScopes.getScopesArray()
        not hasScope(previousScopesArray, 'meta.property-name.scss') and
          not hasScope(previousScopesArray, 'meta.property-value.scss') and
          not hasScope(previousScopesArray, 'support.type.property-name.css') and
          not hasScope(previousScopesArray, 'support.type.property-value.css')
      else
        false
    else
      false

  isPropertyValuePrefix: (prefix) ->
    prefix = prefix.trim()
    prefix.length > 0 and prefix isnt ':'

  isPropertyNamePrefix: (prefix) ->
    return false unless prefix?
    prefix = prefix.trim()
    prefix.length > 0 and prefix.match(/^[a-zA-Z-]+$/)

  getImportantPrefix: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    importantPrefixPattern.exec(line)?[1]
  
  getParentObjectName : (bufferPosition, editor) ->
    {row} = bufferPosition
    while row >= 0
      line = editor.lineTextForBufferRow(row)
      regexResult = objectNameWithColonPattern.exec(line)
      propertyName = regexResult?[1]
      
      parentNameIndex = regexResult?.index || -1;
      return if parentNameIndex <  line.lastIndexOf('}')
      return propertyName if propertyName
      row--
    return
  
  getPreviousPropertyName: (bufferPosition, editor) ->
    {row} = bufferPosition
    while row >= 0
      line = editor.lineTextForBufferRow(row)
      propertyName = propertyNameWithColonPattern.exec(line)?[1]
      return propertyName if propertyName
      row--
    return

  getPropertyValueCompletions: (request) ->
    {bufferPosition, editor, prefix, scopeDescriptor} = request
    property = @getPreviousPropertyName(bufferPosition, editor)
    parentPropertyName = @getParentObjectName(bufferPosition, editor)
    
    return null unless @properties[property] #and @properties[parentPropertyName]
    
    values = @properties[property].values
    
    return null unless values?

    scopes = scopeDescriptor.getScopesArray()

    completions = []
    if @isPropertyValuePrefix(prefix)
      for value in values when firstCharsEqual(value.replace(/\"/g,''), prefix.replace(/\"/g,''))
        if firstCharsEqual(value, prefix)
          completions.push(@buildPropertyValueCompletion(value, property, scopes, request))
        else
          completions.push(@buildPropertyValueCompletionWidthQuotation(value, property, scopes, request))
    else
      for value in values
        completions.push(@buildPropertyValueCompletion(value, property, scopes, request))

    # if importantPrefix = @getImportantPrefix(editor, bufferPosition)
    #   # attention: règle dangereux
    #   completions.push
    #     type: 'keyword'
    #     text: '!important'
    #     displayText: '!important'
    #     replacementPrefix: importantPrefix
    #     description: "Forces this property to override any other declaration of the same property. Use with caution."
    #     descriptionMoreURL: "#{cssDocsURL}/Specificity#The_!important_exception"

    completions

  buildPropertyValueCompletion: (value, propertyName, scopes, {scopeDescriptor, bufferPosition, prefix, editor}) ->
    text = "#{value},"
    
    
    description = @properties[propertyName]?.description
    description = "#{value} value for the #{propertyName} property" unless description
    {
      type: 'value'
      text: text
      displayText: value
      description: description
    }
      
  buildPropertyValueCompletionWidthQuotation: (value, propertyName, scopes, {scopeDescriptor, bufferPosition, prefix, editor}) ->
    {
      text: value
      displayText: value
      description: "quo #{value} value for the #{propertyName} property"
      replacementPrefix : "\"#{prefix}",
      onDidInsertSuggestion : ({editor, triggerPosition, suggestion}) ->
        targetRange = [[triggerPosition.row,0 ],[triggerPosition.row, triggerPosition.column]]
        originText = editor.getTextInRange targetRange
        if !(new RegExp("#{suggestion.replacementPrefix}$")).test(originText)
          editor.setTextInBufferRange targetRange, originText.replace(new RegExp("#{prefix}$"),"#{value}")
    }
  
  getPropertyNamePrefix: (bufferPosition, editor) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    propertyNamePrefixPattern.exec(line)?[0]
  

  getPropertyNameCompletions: ({bufferPosition, editor, scopeDescriptor, activatedManually}) ->
    # Don't autocomplete property names in SASS on root level
    scopes = scopeDescriptor.getScopesArray()
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    return [] if hasScope(scopes, 'source.sass') and not line.match(/^(\s|\t)/)

    prefix = @getPropertyNamePrefix(bufferPosition, editor)
    return null unless activatedManually or prefix
    
    parentObjName = @getParentObjectName(bufferPosition, editor)
    
    innerProperties = {} 
    if @properties[parentObjName]?.type && @types[@properties[parentObjName]?.type]?.properties.length
      _.each @types[@properties[parentObjName]?.type].properties, (innerKey) ->
        innerProperties[innerKey] = {} 
    
    completions = []
    candidateProperties = if _.isEmpty(innerProperties) then @properties else innerProperties
    for property, options of candidateProperties when not prefix or firstCharsEqual(property, prefix)
      jsObjectTypes = ['Font']
      if jsObjectTypes.indexOf(@properties[property].type) > -1
        completions.push
          type: 'property'
          snippet: "#{property}: {\n\t\${1}\t\n}"
          displayText: property
          description: options.description
      else  
        completions.push(@buildPropertyNameCompletion(property, prefix, options))
    completions

  buildPropertyNameCompletion: (propertyName, prefix, {description}) ->
    type: 'property'
    text: "#{propertyName}: "
    displayText: propertyName
    replacementPrefix: prefix
    description: description
    descriptionMoreURL: "#{cssDocsURL}/#{propertyName}"

  getPseudoSelectorPrefix: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    line.match(pesudoSelectorPrefixPattern)?[0]

  getPseudoSelectorCompletions: ({bufferPosition, editor}) ->
    prefix = @getPseudoSelectorPrefix(editor, bufferPosition)
    return null unless prefix

    completions = []
    for pseudoSelector, options of @pseudoSelectors when firstCharsEqual(pseudoSelector, prefix)
      completions.push(@buildPseudoSelectorCompletion(pseudoSelector, prefix, options))
    completions

  buildPseudoSelectorCompletion: (pseudoSelector, prefix, {argument, description}) ->
    completion =
      type: 'pseudo-selector'
      replacementPrefix: prefix
      description: description
      descriptionMoreURL: "#{cssDocsURL}/#{pseudoSelector}"

    if argument?
      completion.snippet = "#{pseudoSelector}(${1:#{argument}})"
    else
      completion.text = pseudoSelector
    completion

  getTagSelectorPrefix: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    tagSelectorPrefixPattern.exec(line)?[1]

  getTagCompletions: ({bufferPosition, editor, prefix}) ->
    completions = []
    that = this
    if prefix
      _.each @tags, (value,key) -> 
        if firstCharsEqual(key, prefix)
            completions.push({
              type: 'tag'
              text: key
              description: that.types[value.apiName]?.description
            })
    completions

hasScope = (scopesArray, scope) ->
  scopesArray.indexOf(scope) isnt -1

firstCharsEqual = (str1, str2) ->
  str1[0].toLowerCase() is str2[0].toLowerCase()
