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
  config:
    numberOfSplitPane:
      title: 'Number of pane column'
      description: 'Layout of "Open All related files"'
      type: 'integer'
      default: 2
      enum: [2,3]
