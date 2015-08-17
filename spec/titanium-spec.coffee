# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe "TSS grammar", ->
  grammar =  null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('titanium-alloy');
    
    runs ->
      grammar = atom.grammars.grammarForScopeName('source.css.tss')

  it 'parses the grammar', ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe 'souce.css.tss'
  
  describe 'property-list', ->
    it 'tokenizes the property-name and property-value', ->
      {tokens} = grammar.tokenizeLine '"Whatever" : { color : 'red' }'
