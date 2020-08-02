var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

imageMagick(picture.path)
.resize('250', '180', '^')
.gravity('center')
.extent(250, 180)
.write(picture.thumb_path, function (error) {
    if(error) 
        console.log(error);
});