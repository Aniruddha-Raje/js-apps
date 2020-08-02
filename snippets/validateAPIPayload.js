var moment = require('moment');

const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
  };
  
  console.log(JSON.stringify(unordered));
  // → '{"b":"foo","c":"bar","a":"baz"}'
  
  const ordered = {};
  Object.keys(unordered).sort().forEach(function(key) {
    ordered[key] = unordered[key];
    console.log(ordered[key]);
  });

  console.log("Looping");
  for(key in ordered){
    console.log(key," => ",ordered[key]);
  }
  
  console.log(JSON.stringify(ordered));