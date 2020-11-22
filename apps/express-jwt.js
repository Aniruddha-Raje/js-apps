var jwt = require('express-jwt');
 
app.get('/protected',
  jwt({ secret: new Buffer('shhhhhhared-secret', 'base64') }),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });