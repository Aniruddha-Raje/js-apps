let async = require('async');
let jwt = require('jsonwebtoken');
let crypto = require('crypto');
let moment = require('moment');

const JWT_SECRET_TOKEN = 's0/\/\P4$$w0rD';
const JWT_WRONG_TOKEN = 'test';

const payload = {
	"current_currency_code": ["JPY","INR"],
	"amount_to_convert": 1000,
	"conversion_currency_code": "MYR",
	"action": "SELL"
}
let orderedPayload = {};
let sig = "";
const secret = "mySecret";

async.waterfall([
    function(callback) {
        sig = moment().unix();
        console.log("Signature | Time Stamp => ",sig,"\n");
        callback(null,sig);
    },
    function(sig, callback) {
        Object.keys(payload).sort().forEach(function(key) {
            orderedPayload[key] = payload[key];
        });
        callback(null,orderedPayload);
    },
    function(orderedPayload, callback) {
        for(key in orderedPayload){
            sig += orderedPayload[key];
        }
        console.log("Signature | Payload    => ",sig,"\n");
        callback(null,sig);
    },
    function(sig, callback) {
        let dataForSignature = sig+secret;
        console.log("Signature | Secret     => ",dataForSignature,"\n");
        callback(null,dataForSignature);
    },
    function(dataForSignature, callback) {
        let sha256 = crypto.createHash('sha256').update(dataForSignature).digest("hex");
        console.log("Signature | sha256     => ", sha256,"\n");
        callback(null,sha256);
    },
    function(sha256, callback) {
        let buff = new Buffer(sha256);
        let base64SignatureData = buff.toString('base64');
        console.log("Signature | BASE64     => ", base64SignatureData,"\n");
        callback(null,base64SignatureData);         
    },
    function(base64SignatureData, callback) {
        let jwtoken = jwt.sign({data: base64SignatureData}, JWT_SECRET_TOKEN, { expiresIn: 60 * 60 * 1 });
        console.log("Signature | JWToken    => ",jwtoken,"\n");
        callback(null,jwtoken);         
    },
    function(jwtoken, callback) {
        jwt.verify(jwtoken, JWT_SECRET_TOKEN, function (err, decoded) {
            //jwt.verify(token, JWT_WRONG_TOKEN, function (err, decoded) {
                if (err) {
                    console.log('Error => ', err,"\n");
            
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
                    callback(err,null);
                } else {
                    console.log('Signature | Verified   => ', decoded,"\n")
                    callback(null, decoded);
                }
        });         
    }
],
function(err, response) {
    if (err) {
        console.log("Error",err);
    } else {
        console.log("Process Completed!");
    }
});