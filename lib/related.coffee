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
    previousActivePane = atom.workspace.getActivePane()
    return unless editor?
    
    editorPath = editor.getPath()
    [isAlloy, alloyType, filename, fileExt] = editorPath.match(alloyRegExp) || []
    isAppTss = /app\/styles\/app.tss$/.test editorPath;
    isAlloyJs = /app\/alloy.js$/.test editorPath;
    
    relatedFilePaths = []
    if isAppTss
      relatedFilePaths = [editorPath.replace('app/styles/app.tss','app/alloy.js')]
    else if isAlloyJs
      relatedFilePaths = [editorPath.replace('app/alloy.js','app/styles/app.tss')]
    else if isAlloy
      _.each alloyDirectoryMap, (folderName,ext)-> 
        if ext!= fileExt
          relatedFilePaths.push(getTargetPath(ext,editor.getPath()));
    else
      return
      
    
    if related2ndPane?.isAlive() != true
      related2ndPane = atom.workspace.getActivePane().splitRight()
    related2ndPane.activate();
    atom.workspace.open(relatedFilePaths[0])
    
    if relatedFilePaths[1]
      if related3rdPane?.isAlive() != true
        if atom.config.get('titanium-alloy.numberOfSplitPane')==2
          related3rdPane = related2ndPane.splitDown()
        else
          related3rdPane = related2ndPane.splitRight()
      related3rdPane.activate();
      atom.workspace.open(relatedFilePaths[1]).then( -> 
        previousActivePane.activate();     # restore cursor focus
      )
  
  closeAllRelatedPanes: () ->
    # if related2ndPane?.isAlive() == true
    related2ndPane.destroy() if related2ndPane?.isAlive()
      
    # if related3rdPane?.isAlive() == true
    related3rdPane.destroy() if related3rdPane?.isAlive()
      
  getTargetPath: getTargetPath
