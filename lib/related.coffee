{CompositeDisposable} = require 'atom'
_ = require 'underscore'

alloyRegExp = ///
  \/(controllers|views|styles)\/ # type directory
  (.*)?\. # filename
  (.*)  # ext
///

alloyDirectoryMap =
  xml : "views"
  tss : "styles"
  js : "controllers"
  
getTargetPath = (type, currentFilePath = atom.workspace.getActiveTextEditor().getPath())->
  currentFilePath.replace alloyRegExp, (match, p1, p2, p3, offset, string)->
    return "/#{alloyDirectoryMap[type]}/#{p2}.#{type}"

related2ndPane = undefined
related3rdPane = undefined

module.exports =
  activate: ->
    atom.commands.add 'atom-workspace', 'titanium:openView': => @openFile('xml')
    atom.commands.add 'atom-workspace', 'titanium:openStyle': => @openFile('tss')
    atom.commands.add 'atom-workspace', 'titanium:openController': => @openFile('js')
    atom.commands.add 'atom-workspace', 'titanium:openAllRelatedFiles': => @openAllFiles()
    atom.commands.add 'atom-workspace', 'titanium:closeAllRelatedPanes': => @closeAllRelatedPanes()

  openFile: (type, options = {})->
    options.searchAllPanes = true
    atom.workspace.open getTargetPath(type), options
  
  openAllFiles: () ->
    editor = atom.workspace.getActiveTextEditor()
    return unless editor?
    
    [isAlloy, alloyType, filename, fileExt] = editor.getPath().match(alloyRegExp)
    return unless isAlloy
    
    previousActivePane = atom.workspace.getActivePane()
    
    relatedFilePaths = []
    _.each alloyDirectoryMap, (folderName,ext)-> 
      if ext!= fileExt
        relatedFilePaths.push(getTargetPath(ext,editor.getPath()));
    
    if related2ndPane?.isAlive() != true
      related2ndPane = atom.workspace.getActivePane().splitRight()
    related2ndPane.activate();
    atom.workspace.open(relatedFilePaths[0])
    
    if related3rdPane?.isAlive() != true
      related3rdPane = related2ndPane.splitDown()
    related3rdPane.activate();
    atom.workspace.open(relatedFilePaths[1]).then( -> 
      previousActivePane.activate();     # restore cursor focus
    );
  
  closeAllRelatedPanes: () ->
    # if related2ndPane?.isAlive() == true
    related2ndPane.destroy() if related2ndPane?.isAlive()
      
    # if related3rdPane?.isAlive() == true
    related3rdPane.destroy() if related3rdPane?.isAlive()
      
  getTargetPath: getTargetPath
