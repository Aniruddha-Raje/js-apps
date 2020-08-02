var async = require('async');

//async.waterfall allows each function to pass its results on to the next function 
//aync.series executes sequentially and passes all results directly to the final callback
//aync.parallel executes in parallel and passes all results to the final callback

var seriesArray = [];
var one = function(callback) {
    callback(null, 'one');
}


var two = function(callback) {
    callback(null, 'two');
}

seriesArray.push(one);
seriesArray.push(two);

async.series(seriesArray,
// optional callback
function(err, results) {
    console.log("Async Series example 1 =>\n"+results+"\n");
    // results is now equal to ['one', 'two']
});
console.log("======================================\n======================================");
async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equal to: {one: 1, two: 2}
    if (err) {
		console.error(err);
		return;
	}
	console.log('Async Series example 2 =>\n'+ results + "\n");
});
console.log("======================================\n======================================");
async.series([
    function functionOne(callback) {
        callback(null, 'SERIES RESULT ONE');
    },
    function functionTwo(callback) {
        callback(null, 'SERIES RESULT TWO');
    },
    function functionThree(callback) {
        callback(null, 'SERIES RESULT Three');
    }
], function (err, result) {
    console.log("Async Series example 3 =>\n"+result+"\n");
});