var fs = require('fs');
var _ = require('underscore');
var api = JSON.parse(fs.readFileSync("/usr/local/lib/node_modules/alloy/docs/api.jsca", "utf8"));

_.each(api.types,function(item,idx){
  var suggestion = {
    text : item.name,
    description : item.description,
    type : "object"
  }
  console.log(suggestion);
});
