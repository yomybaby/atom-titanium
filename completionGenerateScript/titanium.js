var fs = require('fs');
var _ = require('underscore');
var titaniumSdkHomePath = '';
if (process.platform === 'win32') {
  titaniumSdkHomePath = process.env['USERPROFILE'];
} else if (process.platform === 'darwin') {
  titaniumSdkHomePath = process.env['HOME'] + 
  "/Library/Application Support/Titanium/mobilesdk/osx";
} else if (process.platform === 'linux') {
  titaniumSdkHomePath = process.env['HOME'] + 
  "/.titanium/mobilesdk/linux";
}

// TODO: alloy path on windows and linux
var alloyPath = '/usr/local/lib/node_modules/alloy'
var alloyApi = JSON.parse(fs.readFileSync(alloyPath+"/docs/api.jsca", "utf8"));

//TODO: get current selected Titanium SDK on windows and linux
var tiConfig = JSON.parse(fs.readFileSync(process.env['HOME'] + '/.titanium/config.json'));
var api = JSON.parse(fs.readFileSync(titaniumSdkHomePath + "/" + tiConfig.sdk.selected + "/api.jsca", "utf8"));
console.log(_.keys(api.types));

/// Generate Available Tag List
var fns = fs.readdirSync(alloyPath+'/Alloy/commands/compile/parsers');
var tagDic = {};
_.each(fns,function(fn) {
  console.log(fn);
  var ar = fn.split('.');
  var tagName = ar[ar.length-2];
  if(tagName.indexOf('_')!==0 && tagName[0] == tagName[0].toUpperCase()){
    tagDic[tagName] = {
      apiName : fn.replace('.js','')
    }
  }else if(tagName=='_ProxyProperty' && fn.indexOf('Ti.UI')===0){
    tagDic[ar[ar.length-3]] = { // Ti.UI.Window._ProxyProperty
      apiName : fn.replace('.js','').replace('._ProxyProperty','')
    }
  }
});

// add Missing Tags
_.extend(tagDic,{
  "View" : {
    apiName : "Ti.UI.View"
  },
  "Templates" : {
  },
  "HeaderView": {
    
  },
  "FooterView": {
    
  },
  "ScrollView" : {
    apiName : "Ti.UI.ScrollView"
  },
  "TableViewRow": {
    apiName : "Ti.UI.TableViewRow"
  }
});


var sortedTagDic = {};
_.keys(tagDic)
  .sort()
  .forEach(function(k){
    sortedTagDic[k] = tagDic[k];
  });


var colorValues = [
  '\"transparent\"','\"aqua\"', '\"black\"', '\"blue\"', '\"brown\"', 
  '\"cyan\"', '\"darkgray\"', '\"fuchsia\"', '\"gray\"', '\"green\"', 
  '\"lightgray\"', '\"lime\"', '\"magenta\"', '\"maroon\"', '\"navy\"', 
  '\"olive\"', '\"orange\"', '\"pink\"', '\"purple\"', '\"red\"', 
  '\"silver\"', '\"teal\"', '\"white\"', '\"yellow\"'
];

// Generate Available Property List
var types = {};
var props = {};
_.each(api.types,function(type,idx){
  if(type.deprecated) return; 
  
  var propertyNamesOfType =[]
  _.each(type.properties,function(prop,idx){
    if(prop.permission !== 'read-only' && prop.name.indexOf('Modules.')!==0){
      
      propertyNamesOfType.push(prop.name);
      
      // property name
      if(props[prop.name]){ //if duplicated propertie name, merge available vales.
        _.extend(props[prop.name],{
          values : _.union(props[prop.name].values,prop.constants),
          description : props[prop.name].description==prop.description.replace( /<p>|<\/p\>/g, '')?props[prop.name].description:'...'
        });
        
      }else{
        props[prop.name] = {
          "values": prop.constants,
          "description": prop.description.replace( /<p>|<\/p\>/g, ''),
          // "types": [type.name]
        }
      }
      
      // property value
      if(prop.type === 'Boolean'){
        props[prop.name].values = ['true','false'];
      }else {
        // alias Titanium -> Ti
        props[prop.name].values = _.map(props[prop.name].values,function(val){
          return val.replace(/Titanium\./g,'Ti.')
        });
      }
      
      if(/[Cc]olor$/.test(prop.name)){
        props[prop.name].values = _.union(props[prop.name].values, colorValues);
      }
    }
  });
  
  
  // missing types
  _.extend(types,{
    "Alloy.Abstract.ItemTemplate" : {
      "description": "Template that represents the basic appearance of a list item.",
      "functions": [
      ],
      "properties": [
          "name",
          "height"
      ],
      "events": []
    },
    "Alloy.Widget" : {
      "description": "Widgets are self-contained components that can be easily dropped into an Alloy project.",
      "functions": [],
      "properties": [
        "src"
      ],
      "events": []
    }
  });
  
  
  types[type.name.replace(/Titanium\./g,'Ti.')] = {
    description : type.description.replace( /<p>|<\/p\>/g, ''),
    functions :  _.map(type.functions,function(f){
      return f.name;
    }),
    properties : propertyNamesOfType,
    events : _.map(type.events,function(e){
      return e.name;
    })
  }
  
});

// missing values
props.layout.values = ['\"vertical\"', '\"horizontal\"','\"composite\"'];

var outputFilename = '../tiCompletions.js';

fs.writeFile(outputFilename, 'module.exports = ' + JSON.stringify({
  properties: props,
  tags: sortedTagDic,
  types : types
}, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 
