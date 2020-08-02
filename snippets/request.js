var request = require('request');

request
  .get('https://www.gstatic.com/webp/gallery3/1.png')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
    console.log(response.body);
  });