{CompositeDisposable} = require 'atom'
related = require './related'
# jsProvider = require './controllerProvider'
styleProvider = require './styleProvider'
clickProvider = require './clickProvider'

module.exports = Titanium =
  activate: ->
    related.activate()
    styleProvider.loadProperties()
  # deactivate: ->
  # serialize: ->
  getProvider: -> styleProvider
  getClickProvider: -> clickProvider.getProvider()
  # config:
  #   openSourceInSplitWindow:
  #     type: 'boolean'
  #     default: false
  #     title: 'Open source in split window'
