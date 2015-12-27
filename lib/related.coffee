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

getRelatedFilePath = (editorPath) ->
  [isAlloy, alloyType, filename, fileExt] = editorPath.match(alloyRegExp) || []
  isAppTss = /app\/styles\/app.tss$/.test editorPath; # TODO : make more advanced Detection
  isAlloyJs = /app\/alloy.js$/.test editorPath; # TODO : make more advanced Detection
  
  relatedFilePaths = []
  
  if isAppTss
    relatedFilePaths = [editorPath.replace('app/styles/app.tss','app/alloy.js')]
  else if isAlloyJs
    relatedFilePaths = [editorPath.replace('app/alloy.js','app/styles/app.tss')]
  else if isAlloy
    _.each alloyDirectoryMap, (folderName,ext)-> 
      if ext!= fileExt
        relatedFilePaths.push(getTargetPath(ext,editorPath));

  relatedFilePaths
        
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
    
    # if number of panes is under 3, make more.
    numberOfPanes = atom.workspace.getPanes().length;
    
    while atom.workspace.getPanes().length<3
      lastPane = _.last(atom.workspace.getPanes())
      if atom.config.get('titanium-alloy.numberOfSplitPane')==2 and atom.workspace.getActivePane().length == 2
        lastPane.splitDown()
      else
        lastPane.splitRight()
    
    relatedFilePaths = getRelatedFilePath(editor.getPath())
    return unless relatedFilePaths.length
      
    panes = atom.workspace.getPanes()
    
    newPaneIdx = 0
    for pane in panes
      if pane != previousActivePane and relatedFilePaths[newPaneIdx]
        pane.activate();
        atom.workspace.open(relatedFilePaths[newPaneIdx++], {}).then( ->
          previousActivePane.activate();
        )
          
  closeAllRelatedPanes: () ->
    editor = atom.workspace.getActiveTextEditor()
    relatedFilePaths = getRelatedFilePath(editor.getPath())
    allEditors = atom.workspace.getTextEditors()
    
    # find and close
    for editor in allEditors
      for path in relatedFilePaths
        if path == editor.getPath()
          editor.destroy()
      
  getTargetPath: getTargetPath
  getRelatedFilePath : getRelatedFilePath
