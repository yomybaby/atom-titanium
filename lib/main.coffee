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
