var express = require('express')
var cors = require('cors')
var multer = require('multer')
var async = require('async')

var app = express();
app.use(cors());
app.listen(4300, function () {
  console.log('listening on port 4300!');
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/home/user/Desktop/node/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
var upload = multer({storage: storage});

const params = {
    '/single': 'file',
    '/multiple': 'files'
  };
  
  function validate(req, res, next) {
    let param = params[req.url];
    if (!req[param]) {
      return res.send({
        errors: {
          message: `${param} cant be empty`
        }
      });
    }
    next();
  }

// function validate(req, res, next) {
//   if (!req.file) {
//     return res.send({
//       errors: {
//         message: 'File cant be empty'
//       }
//     });
//   }
//   next();
// }

app.post('/single', upload.single('singleFile'), validate, function (req, res, next) {
  console.log(req.file.filename);
  res.send({'message': 'File received! k thnkx bye!'});
});

app.post('/multiple', upload.array('multipleFiles', 3), validate, function (req, res, next) {
  console.log(req.files);

  async.each(req.files, function (temp, callback) {
    console.log(temp);
  }, function (err) {
    if (err) {
      console.log('Error ' + err);
    } else {
      console.log('Success');
    }
  });

  res.send({'message': 'Files received! k thnkx bye!'});
});

var cpUpload = upload.fields([{name: 'singleFile', maxCount: 1}, {name: 'multipleFiles', maxCount: 3}])
app.post('/fields', cpUpload, validate, function (req, res, next) {
  console.log(req);
  res.send({'message': 'Files received! k thnkx bye!'});
});