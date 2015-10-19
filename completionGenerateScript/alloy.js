var fs = require('fs');
var _ = require('underscore');
var alloyPath = '/usr/local/lib/node_modules/alloy'
var api = JSON.parse(fs.readFileSync(alloyPath+"/docs/api.jsca", "utf8"));

// _.each(api.types,function(item,idx){
//   var suggestion = {
//     text : item.name,
//     description : item.description,
//     type : "object"
//   }
//   console.log(suggestion);
// });


///
/// Generate Available Tag List
var fns = fs.readdirSync(alloyPath+'/Alloy/commands/compile/parsers');
var tagArr = []
_.each(fns,function(fn) {
  var ar = fn.split('.');
  var tagName = ar[ar.length-2];
  if(tagName.indexOf('_')!==0 && tagName[0] == tagName[0].toUpperCase()){
    tagArr.push(tagName);
  }else if(tagName=='_ProxyProperty' && fn.indexOf('Ti.UI')===0){
    tagArr.push(ar[ar.length-3]); // Ti.UI.Window._ProxyProperty
  }
});
tagArr = _.uniq(tagArr).sort();

console.log(tagArr.join('|')); // for tss.cson
console.log(JSON.stringify(tagArr)); // for completions.json
