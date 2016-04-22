# All-in-One package for Titanium Alloy
This is a Atom package for [Titanium Alloy](https://github.com/appcelerator/alloy)

```
$ apm install titanium-alloy
```

> **Conflict & Requires Notice**  
- Requires
  - [Hyperclick](https://atom.io/packages/hyperclick) package for Jump to definition   
  (Now It will be installed automatically.  After relaunch atom, Hyperclick works. Thanks @HazemKhaled #16)
- Conflict
  - If you using other tss grammar package, such as language-tss. It makes this package doesn't work.

## Features
This Documentation will be updated. :)

### Autocomplete
- XML Autocomplete : tagName, property names of current Tag, values of current property
    - id and class name completion baseon related tss file and `app.tss` file.
- TSS autocomplete : tagName, property names, values of current property
    ![autocomplete](https://github.com/yomybaby/atom-titanium/raw/master/screenshot_autocomplete_2.gif)

### Jump to definition
This feature is a [hyperclick](https://atom.io/packages/hyperclick) provider.   [hyperclick](https://atom.io/packages/hyperclick) package required.

- jump to tss definition from xml [class|id|tag] name
- jump to event handler definition from xml `onEventName` property.

![jump-to-definition](https://github.com/yomybaby/atom-titanium/raw/master/screenshot2_jumpto.gif)

Hyperclick is triggered by two events:
- `<cmd>` or `<cmd-mousemove>` underlines clickable text under the mouse.
- `<cmd-mousedown>` performs the action associated with the clickable text.
- `<cmd-alt-enter>` performs the action on the text under the cursor.


### Open related file depend on current focused file
Key Bindings | Command Desc
----------- | ------------
`ctrl-alt-a` | Open all relative files
`ctrl-alt-v` | Open view
`ctrl-alt-s` | Open style
`ctrl-alt-c` | Open controller

On package setting, there is an option to change layout of "Open All related files" command. (2 columns or 3columns)

### TSS Sytax Highlight  
refer to language-css and language-json, language-tss  
![tss-highlight](https://github.com/yomybaby/atom-titanium/raw/master/screenshot1.gif)  
This hightlight use css color your current theme. So tss file looks like css file.

## Reference
- [Autocomplete css](https://github.com/atom/autocomplete-css)
- Jump to definition by clicking
    - [css package](https://github.com/js-padavan/atom-css-class-checker)
    - [hyperclick](https://atom.io/packages/hyperclick)

## Release note
See [github repo release page](https://github.com/yomybaby/atom-titanium/releases).

## Contribution?
- Any issue, sugestion, PR makes me happy.

[![Analytics](https://ga-beacon.appspot.com/UA-67056753-1/atom-titanium/readme)](https://github.com/igrigorik/ga-beacon)
