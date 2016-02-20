{CompositeDisposable} = require 'atom'
related = require './related'
styleProvider = require './styleProvider'
viewProvider = require './viewProvider'
clickProvider = require './clickProvider'
controllerProvider = require './controllerProvider'

module.exports = Titanium =
  activate: ->
    related.activate()
    styleProvider.loadProperties()
    viewProvider.loadCompletions()
    controllerProvider.loadCompletions()
  # deactivate: ->
  # serialize: ->
  getProvider: -> [styleProvider,viewProvider,controllerProvider]
  getClickProvider: -> clickProvider.getProvider()
  config:
    numberOfSplitPane:
      title: 'Number of pane column'
      description: 'Layout of "Open All related files"'
      type: 'integer'
      default: 2
      enum: [2,3]
    defaultI18nLanguage:
      title: 'Default language of i18n'
      description: 'Use this setting when generating i18n strings with hyperclick or autocomplete'
      type: 'string'
      default: 'en'
      enum: ['en','ko','jp','nl'] # TODO: add all languages
