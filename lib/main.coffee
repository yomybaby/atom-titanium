{CompositeDisposable} = require 'atom'
related = require './related'
jsProvider = require './controllerProvider'
clickProvider = require './clickProvider'

module.exports = Titanium =
  activate: ->
    related.activate()
  # deactivate: ->
  # serialize: ->
  # getProvider: -> [jsProvider]
  getClickProvider: -> clickProvider.getProvider()
  config:
    openSourceInSplitWindow:
      type: 'boolean'
      default: false
      title: 'Open source in split window'
