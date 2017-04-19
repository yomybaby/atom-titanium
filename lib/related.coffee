{CompositeDisposable} = require 'atom'
_ = require 'underscore'
util = require './ti-pkg-util'
path = require 'path'

alloyDirectoryMap =
  xml : "views"
  tss : "styles"
  js : "controllers"
  
getTargetPath = (type, currentFilePath = atom.workspace.getActiveTextEditor().getPath())->
  pathUnderAlloy = path.relative(util.getAlloyRootPath(),currentFilePath)
  pathSplitArr = pathUnderAlloy.split(path.sep)
  
  if pathSplitArr[0] is 'widgets'
    pathSplitArr[2] = alloyDirectoryMap[type]  # change type
  else
    pathSplitArr[0] = alloyDirectoryMap[type]  # change type
  
  fileSplitArr = pathSplitArr[pathSplitArr.length - 1].split('.') 
  fileSplitArr[fileSplitArr.length-1] = type #change ext
  
  path.resolve(util.getAlloyRootPath(), pathSplitArr.join(path.sep),'..',fileSplitArr.join('.'))

getRelatedFilePath = (editorPath) ->
  
  pathSplit = path.relative(util.getAlloyRootPath(),editorPath).split(path.sep)
  currentType = if pathSplit[0] is 'widgets' then pathSplit[2] else pathSplit[0]

  hasRelatedFiles = ['views','styles','controllers'].indexOf(currentType) >= 0

  fileExt = path.parse(editorPath).ext.substr(1);
  isAppTss = editorPath.endsWith(path.join('/app/styles/app.tss')) # TODO : make more advanced Detection
  isAlloyJs = editorPath.endsWith(path.join('/app/alloy.js')) # TODO : make more advanced Detection
  return [] if !util.isAlloyProject() or (!hasRelatedFiles and !isAppTss and !isAlloyJs)

  relatedFilePaths = []
  
  if isAppTss
    relatedFilePaths = [editorPath.replace(path.join('/app/styles/app.tss'),path.join('/app/alloy.js'))]
  else if isAlloyJs
    relatedFilePaths = [editorPath.replace(path.join('/app/alloy.js'),path.join('/app/styles/app.tss'))]
  else
    _.each alloyDirectoryMap, (folderName,ext)->
      if ext!= fileExt
        relatedFilePaths.push(getTargetPath(ext,editorPath));

  relatedFilePaths
        
module.exports =
  activate: ->
    
    @commands = atom.commands.add 'atom-workspace', 
      'titanium:openView': => @openFile('xml')
      'titanium:openStyle': => @openFile('tss')
      'titanium:openController': => @openFile('js')
      'titanium:openAllRelatedFiles': => @openAllFiles()
      'titanium:closeAllRelatedPanes': => @closeAllRelatedPanes()
  
  deactive: ->
    @commands.dispose()
    @commands = null
    
  openFile: (type, options = {})->
    editor = atom.workspace.getActiveTextEditor()
    return unless editor
    
    options.searchAllPanes = true
    atom.workspace.open getTargetPath(type), options
  
  openAllFiles: () ->
    editor = atom.workspace.getActiveTextEditor()
    previousActivePane = atom.workspace.getActivePane()
    return unless editor?
    
    relatedFilePaths = getRelatedFilePath(editor.getPath())
    return unless relatedFilePaths.length
        
    
    # if number of panes is under 3, make more.
    numberOfPanes = atom.workspace.getPanes().length;
    
    while atom.workspace.getPanes().length<3
      lastPane = _.last(atom.workspace.getPanes())
      if atom.config.get('titanium-alloy.numberOfSplitPane')==2 and atom.workspace.getPanes().length == 2
        lastPane.splitDown()
      else
        lastPane.splitRight()
        
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
  
    return unless editor
    
    # find and close
    for editor in allEditors
      for p in relatedFilePaths
        if p == editor.getPath()
          editor.destroy()
      
  getTargetPath: getTargetPath
  getRelatedFilePath : getRelatedFilePath
