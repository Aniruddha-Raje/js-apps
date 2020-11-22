var thumb = require('node-thumbnail').thumb;


thumb({
    source: '/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/test.jpg',
    destination: '/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets',
    width: 500,
  }).then(function() {
    console.log('Success');
  }).catch(function(e) {
    console.log('Error', e.toString());
  });