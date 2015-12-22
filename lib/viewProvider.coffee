fs = require 'fs'
path = require 'path'
_ = require 'underscore'
util = require './ti-pkg-util'
related = require './related'

trailingWhitespace = /\s$/
attributePattern = /\s+([a-zA-Z][-a-zA-Z]*)\s*=\s*$/
tagPattern = /<([a-zA-Z][-a-zA-Z]*)(?:\s|$)/

module.exports =
  selector: '.text.alloyxml, .text.xml'
  disableForSelector: 'text.alloyxml .comment'
  filterSuggestions: true

  getSuggestions: (request) ->
    scopes = request.scopeDescriptor.getScopesArray()
    completions = []
    # if xml start with <Alloy, change grammars to text.alloyxml
    if scopes.indexOf('text.xml') isnt -1
      editor = request.editor
      lineCnt = editor.getLineCount()
      for i in [0...lineCnt] by 1 when editor.lineTextForBufferRow(i).indexOf('<Alloy') isnt -1 
        editor.setGrammar(atom.grammars.grammarForScopeName('text.alloyxml')) 
        break
    
    {prefix} = request
    if @isAttributeValueStartWithNoPrefix(request)
      completions = @getAttributeValueCompletions(request)
    else if @isAttributeValueStartWithPrefix(request)
      completions = @getAttributeValueCompletions(request, prefix)
    else if @isAttributeStartWithNoPrefix(request)
      completions = @getAttributeNameCompletions(request)
    else if @isAttributeStartWithPrefix(request)
      completions = @getAttributeNameCompletions(request, prefix)
    else if @isTagStartWithNoPrefix(request)
      completions = @getTagNameCompletions()
    else if @isTagStartTagWithPrefix(request)
      completions = @getTagNameCompletions(prefix)
    
    completions?.sort util.completionSortFun

  onDidInsertSuggestion: ({editor, suggestion}) ->
    setTimeout(@triggerAutocomplete.bind(this, editor), 1) if suggestion.type is 'attribute'

  triggerAutocomplete: (editor) ->
    atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', activatedManually: false)

  isTagStartWithNoPrefix: ({prefix, scopeDescriptor}) ->
    scopes = scopeDescriptor.getScopesArray()
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

  isAttributeStartWithPrefix: ({prefix, scopeDescriptor, bufferPosition, editor}) ->
    return false unless prefix
    return false if trailingWhitespace.test(prefix)

    scopes = scopeDescriptor.getScopesArray()
    return true if scopes.indexOf('entity.other.attribute-name.html') isnt -1
    
    previousBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - 1)]
    previousScopes = editor.scopeDescriptorForBufferPosition(previousBufferPosition)
    previousScopesArray = previousScopes.getScopesArray()
    return true if previousScopesArray.indexOf('entity.other.attribute-name.html') isnt -1
    
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
    tagAttributes = @getTagAttributes(tag).concat(['id','class','platform'])
    
    # tag attributes
    for attribute in tagAttributes when not prefix or firstCharsEqual(attribute, prefix)
      completions.push(@buildAttributeCompletion(attribute, tag))

    # events
    events = @completions.types[@completions.tags[tag]?.apiName]?.events || {};
    for event in  events when not prefix or firstCharsEqual('on'+capitalizeFirstLetter(event), prefix)
      completions.push(@buildAttributeCompletion('on'+capitalizeFirstLetter(event), tag, event))

    ## global properties ..
    # for attribute, options of @completions.properties when not prefix or firstCharsEqual(attribute, prefix)
    #   completions.push(@buildAttributeCompletion(attribute)) if options.global
    
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
      description: "#{attribute} attribute to <#{tag}> tags"
      # descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)
    else
      snippet: "#{attribute}=\"$1\"$0"
      displayText: attribute
      type: 'attribute'
      # description:"Global #{attribute} attribute"
      # descriptionMoreURL: @getGlobalAttributeDocsURL(attribute)

  getAttributeValueCompletions: ({editor, bufferPosition}, prefix) ->
    tag = @getPreviousTag(editor, bufferPosition)
    attribute = @getPreviousAttribute(editor, bufferPosition)
    currentPath  = atom.workspace.getActiveTextEditor().getPath()
    currentControllerName = path.basename(currentPath, path.extname(currentPath))
    completions = []
    
    # realted .tss 
    if attribute == 'id' or attribute == 'class'
      sourceEditor = util.getFileEditor related.getTargetPath('tss')
      if(!sourceEditor.isEmpty())
        values = tokenTextForSelector(sourceEditor.displayBuffer.tokenizedBuffer, attribute)
        fileName = _.last(sourceEditor.getPath().split('/'))
        for value in values when not prefix or firstCharsEqual(value, prefix)
          completions.push @buildStyleSelectorCompletion(attribute, value, fileName)
        
      # app.tss 
      arr = related.getTargetPath('tss').split('/');
      arr[arr.length-1] = 'app.tss';
      sourceEditor = util.getFileEditor arr.join('/');
      if(!sourceEditor.isEmpty())
        values = tokenTextForSelector(sourceEditor.displayBuffer.tokenizedBuffer, attribute)
        fileName = _.last(sourceEditor.getPath().split('/'))
        for value in values when not prefix or firstCharsEqual(value, prefix)
          completions.push @buildStyleSelectorCompletion(attribute, value, fileName)

    else if attribute is 'src'
      tiProjectRootPath = util.getTiProjectRootPath()
      if tag is 'Require'
        files = fs.readdirSync path.join(tiProjectRootPath,'app','controllers')
        for file in files
          if path.extname(file) is '.js' and currentControllerName!=file.split('.')[0] # exclude current controller
            completions.push 
              text: file.split('.')[0]
              type: 'require'
      else if tag is 'Widget'
        if tiProjectRootPath
          alloyConfigPath = path.join(tiProjectRootPath, 'app','config.json')
          try
            configObj = JSON.parse(fs.readFileSync(alloyConfigPath));
            for widgetName, value of configObj?.dependencies
              completions.push
                text : widgetName
                type : 'require'
          catch e 
            return []
    else
      values = @getAttributeValues(attribute)
      for value in values when not prefix or firstCharsEqual(value, prefix)
        value=value.replace(/\"/g,'');
        completions = @buildAttributeValueCompletion(tag, attribute, value)
    
    return completions
    
  buildStyleSelectorCompletion: (attribute, value,fileName) ->
    text : value
    type : if attribute=='id' then "#" else '.'
    rightLabel : fileName.split('.')[0]
    
  buildAttributeValueCompletion: (tag, attribute, value) ->
    if @completions.properties[attribute]?.global
      text: value
      type: 'value'
      description: "#{value} value for global #{attribute} attribute"
      # descriptionMoreURL: @getGlobalAttributeDocsURL(attribute)
    else
      text: value
      type: 'value'
      description: "#{value} value for #{attribute} attribute to <#{tag}>"
      # descriptionMoreURL: @getLocalAttributeDocsURL(attribute, tag)

  loadCompletions: ->
    @completions = require('../tiCompletions');
    _.extend( @completions.properties,{
      id : 
        description : 'TSS id'
      class : 
        description : 'TSS class'
      platform :
        type: "String",
        description : 'Platform condition'
        values : [
          "android"
          "ios",
          "mobileweb",
          "windows"
        ]
    })

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
  str1 = str1.replace(/\"/g,'');
  str2 = str2.replace(/\"/g,'');
  str1[0].toLowerCase() is str2[0].toLowerCase()

capitalizeFirstLetter = (string) ->
  string.charAt(0).toUpperCase() + string.slice(1)

tokenTextForSelector = (tokenizedBuffer, selectorType) ->
  matchingTokens = []
  for {tokens} in tokenizedBuffer.tokenizedLines
      for token in tokens
        if hasScope(token.scopes, "entity.other.attribute-name.#{selectorType}.css.tss") and !hasScope(token.scopes, "punctuation.definition.entity.css.#{selectorType}.tss")
          matchingTokens.push token.value
  matchingTokens

hasScope = (scopesArray, scope) ->
  scopesArray.indexOf(scope) != -1
