const fs   = require('fs');
const jwt = require('jsonwebtoken');

let payload = {
    "subType" : "user",
    "subRole" : ["user", "admin"]
};

var privateKEY  = fs.readFileSync('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/private.key', 'utf8');
var publicKEY  = fs.readFileSync('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/public.key', 'utf8');

// SIGNING OPTIONS
let signOptions = {
    issuer: "test",
    audience: "test",
    subject: "test",
    expiresIn: 7200,
    algorithm: "RS256"
};

let token = jwt.sign(payload, privateKEY, signOptions);
console.log("Token - " + token);

let decoded = jwt.decode(token, {complete: true});
console.log('decoded => ',decoded);
console.log(decoded.header);
console.log(decoded.payload);

let verifyOptions = {
    issuer: decoded.payload.iss,
    audience: decoded.payload.aud,
    subject: decoded.payload.sub,
    algorithm: decoded.header.alg,
    maxAge: 300
};

var legit = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));
