var async = require('async');
const jwt = require('jsonwebtoken');
var crypto = require('crypto');

//Data to be used for creating signature
var request = "20190402133000SELL1000MYRUSDsecretkey";
const JWT_SECRET_TOKEN = 's0/\/\P4$$w0rD';
const JWT_WRONG_TOKEN = 'test';

//Apply SHA256
var sha256 = crypto.createHash('sha256').update(request).digest("hex");
console.log("sha256 data = ", sha256);

//Convert to Base64
let buff = new Buffer(sha256);  
let base64SignatureData = buff.toString('base64');

//Signature
console.log("Final signature data = ", base64SignatureData);

// Equivalent to 1 Hour
// Data should be an Object to be signed
let token = jwt.sign({data: base64SignatureData}, JWT_SECRET_TOKEN, { expiresIn: 60 * 60 * 1 });

console.log("JWToken => ",token);
console.log("token => "+JSON.stringify(jwt.decode(token)));

jwt.verify(token, JWT_SECRET_TOKEN, function (err, decoded) {
//jwt.verify(token, JWT_WRONG_TOKEN, function (err, decoded) {
    if (err) {             
        console.log('Error => ', err);

        if (err.name === 'TokenExpiredError') {
            console.log("AUTH_EXPIRED");
        } 
        else if (err.name === 'JsonWebTokenError') {
            console.log("JWT_ERROR");
        }
        else if (err.name === 'NotBeforeError') {
            console.log("JWT_NOT_ACTIVE");
        } else {
            console.log("ERR_ON");
        }

    } else {
        console.log('Success => ', decoded)
    }
});