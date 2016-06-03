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
      description: 'Use this setting when generating i18n strings with hyperclick and autocomplete'
      type: 'string'
      default: 'en'
      enum: ['af', 'sq', 'ar', 'eu', 'bg', 'be', 'ca', 'hr', 'cs', 'da', 'nl',
        'en', 'eo', 'et', 'fo', 'fi', 'fr', 'gl', 'de', 'el', 'iw', 'hu', 'is',
        'ga', 'it', 'ja', 'ko', 'lv', 'lt', 'mk', 'mt', 'no', 'pl', 'pt', 'ro',
        'ru', 'gd', 'sr', 'sr', 'sk', 'sl', 'es', 'sv', 'tr', 'uk'] # https://www.w3.org/International/O-charset-lang.html
    styleClassTemplate:
      title: 'Style class(.) template'
      type: 'string'
      default: '\n".${text}": {\n}\n'
    styleIdTemplate:
      title: 'Style id(#) template'
      type: 'string'
      default: '\n"#${text}": {\n}\n'
    functionTemplate:
      title: 'Function template'
      type: 'string'
      default: '\nfunction ${text}(e){\n}\n'
