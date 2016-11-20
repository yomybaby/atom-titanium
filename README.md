# All-in-One package for Titanium Alloy
This is a Atom package for [Titanium Alloy](https://github.com/appcelerator/alloy)

```
$ apm install titanium-alloy
```

> **Conflict & Requires Notice** 
- Alloy 1.8.x setting
  - If you use alloy 1.7.x or before, you have to un-check the checkbox of "Is Alloy CLI 1.8.x or later?" package setting because [Alloy 1.8 relocates i18n and platform directories](http://www.appcelerator.com/blog/2016/03/alloy-1-8-relocates-i18n-and-platform-directories/). 
- Requires
  - [Hyperclick](https://atom.io/packages/hyperclick) package for Jump to definition   
  (Now It will be installed automatically.  After relaunch atom, Hyperclick works. Thanks @HazemKhaled #16)
- Conflict
  - If you using other tss grammar package, such as language-tss. It makes this package doesn't work.

## Features
### Autocomplete
![jump-to-definition](https://github.com/yomybaby/atom-titanium/raw/master/screenshots/valueCompletionOnJs.gif)
- Titanium properties
    - such as 'Ti.UI.SIZE', true, 'black', `Ti.UI.TEXT_ALIGNMENT_CENTER`.
- id and class name
    - based on current controller's tss and `app.tss`.
- module name
    - all of controller/widget/model name on XML and JS
  - on XML : After `<Require src='`, you can see the suggestions.
  - on JS : After `Alloy.create[Controller|Widget|Model]`, you can see the suggestions.
- Image path
    - image path in `app/assets/images` directory. 
    - When you type `'/i'`, you can see the suggestions.
- i18n
  - i18n key base on `app/i18n/{language}/strings.xml`
  - After `L('`, you can see the suggestions

### Jump to definition
This feature is a [hyperclick](https://atom.io/packages/hyperclick) provider.  

- Jump to tss definition from xml [class|id|tag] name
- Jump to event handler definition from xml `onEventName` property
- Jump to i18n key definition from [js|tss] file.
- If not exists, Generate a code based on template.
    - Now, you can change template on `~/.atom/config.cson`. (#42 Thanks @	DouglasHennrich)

Hyperclick is triggered by two events:
- `<cmd>` or `<cmd-mousemove>` underlines clickable text under the mouse.
- `<cmd-mousedown>` performs the action associated with the clickable text.
- `<cmd-alt-enter>` performs the action on the text under the cursor.

![jump-to-definition](https://github.com/yomybaby/atom-titanium/raw/master/screenshots/screenshot2_jumpto.gif)


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
![tss-highlight](https://github.com/yomybaby/atom-titanium/raw/master/screenshots/screenshot1.gif)  
This hightlight use css color your current theme. So tss file looks like css file.

### Snippet
See [`snippets/tialloy.cson`](https://github.com/yomybaby/atom-titanium/blob/master/snippets/tialloy.cson)
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
