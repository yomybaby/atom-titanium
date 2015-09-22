var fs = require('fs');
var _ = require('underscore');
var api = JSON.parse(fs.readFileSync("/Users/yomybaby/Library/Application Support/Titanium/mobilesdk/osx/5.0.0.GA/api.jsca", "utf8"));

var props = {};
var tags = [];
_.each(api.types,function(type,idx){
  // /console.log(_.keys(item.properties));
  _.each(type.properties,function(prop,idx){
    if(prop.permission !== 'read-only'){
      if(props[prop.name]){
        props[prop.name].values = _.union(props[prop.name].values,prop.constants)
        // props[prop.name].description = 
      }else{
        props[prop.name] = {
          "values": prop.constants,
          "description": prop.description
        }
      }
      
      if(prop.type === 'Boolean'){
        props[prop.name].values = ['true','false'];
      }
      
      props[prop.name].values = _.map(props[prop.name].values,function(val){
        return val.replace(/Titanium\./g,'Ti.')
      });
    }
      
      
      //   props[prop.name] && props[prop.name].values = ['true','false'];
      // }
  });
  _.each(type.functions,function(fnc,idx){
    if(fnc.name.indexOf('create')==0){
      var tagName = fnc.name.replace('create','');
      tagName && tags.push(tagName);
    }
  });
});


var outputFilename = '../completions.json';

fs.writeFile(outputFilename, JSON.stringify({
  properties: props,
  tags: tags
}, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 
