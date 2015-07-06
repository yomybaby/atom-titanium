{CompositeDisposable} = require 'atom'

alloyRegExp = ///
  \/(controllers|views|styles)\/ # type directory
  (.*)?\. # filename
  (.*)  # ext
///

alloyDirectoryMap =
  xml : "views"
  tss : "styles"
  js : "controllers"
  
module.exports =
  activate: ->
    atom.commands.add 'atom-workspace', 'titanium:openView': => @openFile('xml')
    atom.commands.add 'atom-workspace', 'titanium:openStyle': => @openFile('tss')
    atom.commands.add 'atom-workspace', 'titanium:openController': => @openFile('js')


  openFile: (type)->
    currentFilePath = atom.workspace.getActiveTextEditor().getPath()

    targetPath = currentFilePath.replace alloyRegExp, (match, p1, p2, p3, offset, string)->
      return "/#{alloyDirectoryMap[type]}/#{p2}.#{type}"
    
    atom.workspace.open targetPath,
      searchAllPanes : true
