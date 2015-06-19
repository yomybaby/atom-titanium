{CompositeDisposable} = require 'atom'
related = require './related'
jsProvider = require './controllerProvider'

module.exports = Titanium =
  activate: ->
    related.activate()
  # deactivate: ->
  # serialize: ->
  getProvider: -> [jsProvider]
