var async = require('async');

async.waterfall([
    function(callback) {
        console.log("1");
        callback("healthcheck", null);
    },
    function(response, callback) {
        console.log("2");
        callback(null, response);
    }
],
function(err, response) {
    if (err) {
        console.log("Error",err);
    } 
    else {
        console.log("Success",response);
    }
});