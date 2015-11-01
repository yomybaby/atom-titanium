fs = require 'fs'
path = require 'path'
_ = require 'underscore'

trailingWhitespace = /\s$/
attributePattern = /\s+([a-zA-Z][-a-zA-Z]*)\s*=\s*$/
tagPattern = /<([a-zA-Z][-a-zA-Z]*)(?:\s|$)/

module.exports =
  selector: '.text.alloyxml, .text.xml'
  disableForSelector: 'text.alloyxml .comment'
  filterSuggestions: true

  getSuggestions: (request) ->
    scopes = request.scopeDescriptor.getScopesArray()
    
    # if xml start with <Alloy, change grammars to text.alloyxml
    if scopes.indexOf('text.xml') isnt -1
      editor = request.editor
      lineCnt = editor.getLineCount()
      for i in [0...lineCnt] by 1 when editor.lineTextForBufferRow(i).indexOf('<Alloy') isnt -1 
        editor.setGrammar(atom.grammars.grammarForScopeName('text.alloyxml')) 
        break
      
    {prefix} = request
    if @isAttributeValueStartWithNoPrefix(request)
      @getAttributeValueCompletions(request)
    else if @isAttributeValueStartWithPrefix(request)
      @getAttributeValueCompletions(request, prefix)
    else if @isAttributeStartWithNoPrefix(request)
      console.log 'isAttributeStartWithNoPrefix'
      @getAttributeNameCompletions(request)
    else if @isAttributeStartWithPrefix(request)
      console.log 'isAttributeStartWithPrefix'
      @getAttributeNameCompletions(request, prefix)
    else if @isTagStartWithNoPrefix(request)
      console.log 'isTagStartWithNoPrefix'
      @getTagNameCompletions()
    else if @isTagStartTagWithPrefix(request)
      console.log 'isTagStartTagWithPrefix'
      @getTagNameCompletions(prefix)
    else
      []

  onDidInsertSuggestion: ({editor, suggestion}) ->
    setTimeout(@triggerAutocomplete.bind(this, editor), 1) if suggestion.type is 'attribute'

  triggerAutocomplete: (editor) ->
    atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', activatedManually: false)

  isTagStartWithNoPrefix: ({prefix, scopeDescriptor}) ->
    scopes = scopeDescriptor.getScopesArray()
    console.log scopes
    console.log prefix
    if prefix is '<' and scopes.length is 1
      scopes[0] is 'text.alloyxml'
    else if prefix is '<' and scopes.length is 2
      scopes[0] is 'text.alloyxml' and scopes[1] is 'meta.scope.outside-tag.html'
    else
      false

  isTagStartTagWithPrefix: ({prefix, scopeDescriptor}) ->
    return false unless prefix
    return false if trailingWhitespace.test(prefix)
    @hasTagScope(scopeDescriptor.getScopesArray())

  isAttributeStartWithNoPrefix: ({prefix, scopeDescriptor}) ->
    return false unless trailingWhitespace.test(prefix)
    @hasTagScope(scopeDescriptor.getScopesArray())

  isAttributeStartWithPrefix: ({prefix, scopeDescriptor}) ->
    return false unless prefix
    return false if trailingWhitespace.test(prefix)

    scopes = scopeDescriptor.getScopesArray()
    return true if scopes.indexOf('entity.other.attribute-name.html') isnt -1
    return false unless @hasTagScope(scopes)

    scopes.indexOf('punctuation.definition.tag.html') isnt -1 or
      scopes.indexOf('punctuation.definition.tag.end.html') isnt -1

  isAttributeValueStartWithNoPrefix: ({scopeDescriptor, prefix}) ->
    lastPrefixCharacter = prefix[prefix.length - 1]
    return false unless lastPrefixCharacter in ['"', "'"]
    scopes = scopeDescriptor.getScopesArray()
    @hasStringScope(scopes) and @hasTagScope(scopes)

  isAttributeValueStartWithPrefix: ({scopeDescriptor, prefix}) ->
    lastPrefixCharacter = prefix[prefix.length - 1]
    return false if lastPrefixCharacter in ['"', "'"]
    scopes = scopeDescriptor.getScopesArray()
    @hasStringScope(scopes) and @hasTagScope(scopes)

  hasTagScope: (scopes) ->
    scopes.indexOf('meta.tag.any.html') isnt -1 or
      scopes.indexOf('meta.tag.other.html') isnt -1 or
      scopes.indexOf('meta.tag.block.any.html') isnt -1 or
      scopes.indexOf('meta.tag.inline.any.html') isnt -1 or
      scopes.indexOf('meta.tag.structure.any.html') isnt -1

  hasStringScope: (scopes) ->
    scopes.indexOf('string.quoted.double.html') isnt -1 or
      scopes.indexOf('string.quoted.single.html') isnt -1

  getTagNameCompletions: (prefix) ->
    completions = []
    for tag of @completions.tags when not prefix or firstCharsEqual(tag, prefix)
      completions.push(@buildTagCompletion(tag, @completions.tags[tag]))
    completions

  buildTagCompletion: (tag, tagObj) ->
    snippet: "#{tag}$1>$2</#{tag}>"
    displayText: tag
    type: 'tag'
    description: tagObj.apiName #"HTML <#{tag}> tag"
    # descriptionMoreURL: @getTagDocsURL(tag)

  getAttributeNameCompletions: ({editor, bufferPosition}, prefix) ->
    completions = []
    tag = @getPreviousTag(editor, bufferPosition)
    tagAttributes = @getTagAttributes(tag)
    
    # tag attributes
    for attribute in tagAttributes when not prefix or firstCharsEqual(attribute, prefix)
      completions.push(@buildAttributeCompletion(attribute, tag))

    # events
    for event in @completions.types[@completions.tags[tag]?.apiName].events when not prefix or firstCharsEqual('on'+capitalizeFirstLetter(event), prefix)
      completions.push(@buildAttributeCompletion('on'+capitalizeFirstLetter(event), tag, event))

    ## global properties ..
    # for attribute, options of @completions.properties when not prefix or firstCharsEqual(attribute, prefix)
    #   completions.push(@buildAttributeCompletion(attribute)) if options.global
    
    # Additional properties
    additionalAttr =
      id : 
        description : 'TSS id'
      class : 
        description : 'TSS class'
      
    for attribute of additionalAttr when not prefix or firstCharsEqual(attribute, prefix)
      completions.push(@buildAttributeCompletion(attribute))
      
    completions

  buildAttributeCompletion: (attribute, tag, event) ->
    if event?
      snippet: "#{attribute}=\"$1\"$0"
      displayText: attribute
      type: 'function'
      iconHTML: '<i class="icon-zap"></i>'
      rightLabel: "<#{tag}>"
      description: "#{event} event of <#{tag}>"
      # descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)
    else if tag?
      snippet: "#{attribute}=\"$1\"$0"
      displayText: attribute
      type: 'attribute'
      rightLabel: "<#{tag}>"
      description: "#{attribute} attribute local to <#{tag}> tags"
      # descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)
    else
      snippet: "#{attribute}=\"$1\"$0"
      displayText: attribute
      type: 'attribute'
      description:"Global #{attribute} attribute"
      # descriptionMoreURL: @getGlobalAttributeDocsURL(attribute)

  getAttributeValueCompletions: ({editor, bufferPosition}, prefix) ->
    tag = @getPreviousTag(editor, bufferPosition)
    attribute = @getPreviousAttribute(editor, bufferPosition)
    values = @getAttributeValues(attribute)
    for value in values when not prefix or firstCharsEqual(value, prefix)
      @buildAttributeValueCompletion(tag, attribute, value)

  buildAttributeValueCompletion: (tag, attribute, value) ->
    if @completions.properties[attribute].global
      text: value
      type: 'value'
      description: "#{value} value for global #{attribute} attribute"
      # descriptionMoreURL: @getGlobalAttributeDocsURL(attribute)
    else
      text: value
      type: 'value'
      description: "#{value} value for #{attribute} attribute local to <#{tag}>"
      # descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)

  loadCompletions: ->
    @completions = require('../tiCompletions');

  getPreviousTag: (editor, bufferPosition) ->
    {row} = bufferPosition
    while row >= 0
      tag = tagPattern.exec(editor.lineTextForBufferRow(row))?[1]
      return tag if tag
      row--
    return

  getPreviousAttribute: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]).trim()

    # Remove everything until the opening quote
    quoteIndex = line.length - 1
    quoteIndex-- while line[quoteIndex] and not (line[quoteIndex] in ['"', "'"])
    line = line.substring(0, quoteIndex)

    attributePattern.exec(line)?[1]

  getAttributeValues: (attribute) ->
    attribute = @completions.properties[attribute]
    attribute?.values ? []

  getTagAttributes: (tag) ->
   @completions.types[@completions.tags[tag]?.apiName]?.properties ? []

  getTagDocsURL: (tag) ->
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/#{tag}"

  getLocalAttributeDocsURL: (attribute, tag) ->
    "#{@getTagDocsURL(tag)}#attr-#{attribute}"

  getGlobalAttributeDocsURL: (attribute) ->
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/#{attribute}"

firstCharsEqual = (str1, str2) ->
  str1[0].toLowerCase() is str2[0].toLowerCase()

capitalizeFirstLetter = (string) ->
  string.charAt(0).toUpperCase() + string.slice(1)
