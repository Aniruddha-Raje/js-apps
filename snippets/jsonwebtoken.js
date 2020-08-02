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

var legit = jwt.verify('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJUeXBlIjoidXNlciIsInN1YlJvbGUiOlsidXNlciIsImFkbWluIl0sImlhdCI6MTU3MDY5MTgzMCwiZXhwIjoxNTcwNjk5MDMwLCJhdWQiOiJ0ZXN0IiwiaXNzIjoidGVzdCIsInN1YiI6InRlc3QifQ.kLtoLAmityhkyDTeG5cfvUYTuI9QkIeHLC0hrDVv2Pm5442RgLJsRhHriB6ql-2k0vClwlf3-x8RenuhcU55I6EcdovCsct-gVQzYGdAs9Irfgc0wVHBVwpRbUJJ74SDYuf4bc5-KI5jQ2utHE_QCVQcBfl1BawmvwhwGO2wGvo', publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));
