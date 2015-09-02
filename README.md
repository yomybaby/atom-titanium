# All-in-One package for Titanium Alloy
This is a Atom package for [Titanium Alloy](https://github.com/appcelerator/alloy)

```
$ apm install titanium-alloy
```

## Features

### Jump to definition
- jump to tss definition from xml [class|id|tag] name
- jump to event handler definition from xml `onEventName` property.

![jump-to-definition](https://github.com/yomybaby/atom-titanium/raw/master/screenshot2_jumpto.gif)

Hyperclick is triggered by two events:
- `<alt>` or `<alt-mousemove>` underlines clickable text under the mouse.
- `<alt-mousedown>` performs the action associated with the clickable text.
- `<cmd-alt-enter>` performs the action on the text under the cursor.

This feature is a [hyperclick](https://atom.io/packages/hyperclick) provider.   [hyperclick](https://atom.io/packages/hyperclick) package required.

### Open related file depend on current focused file
Key Bindings | Command Desc
----------- | ------------
`ctrl-alt-a` | Open all relative files
`ctrl-alt-v` | Open view
`ctrl-alt-s` | Open style
`ctrl-alt-c` | Open controller


### TSS Sytax Highlight  
refer to language-css and language-json, language-tss  
![tss-highlight](https://github.com/yomybaby/atom-titanium/raw/master/screenshot1.gif)  
This hightlight use css color your current theme. So tss file looks like css file.

## Todos
- Auto complete (.js, .xml, .tss)
    - tss ( [autocomplete css](https://github.com/atom/autocomplete-css))
- Jump to definition by clicking (~~view to style definition~~(v0.3.0), ~~view to controller handler~~(v0.3.5), reverses..)
    - ref 1 : [css package](https://github.com/js-padavan/atom-css-class-checker))
    - ref 2 : [hyperclick](https://atom.io/packages/hyperclick)

## Release note
See [github repo release page](https://github.com/yomybaby/atom-titanium/releases).

## Contribution?
- Any issue, sugestion, PR makes me happy.

[![Analytics](https://ga-beacon.appspot.com/UA-67063150-1/atom-titanium/readme)](https://github.com/yomybaby/atom-titanium)
