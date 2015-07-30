# All-in-One package for Titanium Alloy
This is a Atom package for [Titanium Alloy](https://github.com/appcelerator/alloy)

## Features

### Jump to TSS definition
You can jump to tss definition from xml [class|id] name.

![jump-to-definition](https://github.com/yomybaby/atom-titanium/raw/master/screenshot2_jumpto.gif)

Hyperclick is triggered by two events:
- `<alt>` or `<alt-mousemove>` underlines clickable text under the mouse.
- `<alt-mousedown>` performs the action associated with the clickable text.
- `<cmd-alt-enter>` performs the action on the text under the cursor.

This feature is a [hyperclick](https://atom.io/packages/hyperclick) provider.   [hyperclick](https://atom.io/packages/hyperclick) package required.

### Open related file depend on current focused file
Key Bindings | Command Desc
----------- | ------------
'ctrl-alt-v' | Open view
'ctrl-alt-s' | Open style
'ctrl-alt-c' | Open Controller

### TSS Sytax Highlight  
refer to language-css and language-json, language-tss  
![tss-highlight](https://github.com/yomybaby/atom-titanium/raw/master/screenshot1.gif)  
This hightlight use css color your current theme. So tss file looks like css file.

## Todos
- Auto complete (.js, .xml, .tss)
    - tss ( [autocomplete css](https://github.com/atom/autocomplete-css))
- Jump to definition by clicking (~~view to style definition~~(v0.3.0), view to controller handler, reverses..)
    - ref 1 : [css package](https://github.com/js-padavan/atom-css-class-checker))
    - ref 2 : [hyperclick](https://atom.io/packages/hyperclick)

## Release note
- v0.3.4 : fix #1
- v0.3.0 : add "jump to TSS definiton" feature.
- v0.2.0 : add "tss syntax Highlight" feature
- v0.1.0 : add "Open related file" feature

## Contribution?
- Any issue, sugestion, PR makes me happy.
