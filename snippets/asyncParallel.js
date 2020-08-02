var async = require('async');

//async.waterfall allows each function to pass its results on to the next function 
//aync.series executes sequentially and passes all results directly to the final callback
//aync.parallel executes in parallel and passes all results to the final callback

var stack = [];
var functionOne = function(callback) {
	console.log("1");
	callback(null, 'First function result');
}
var functionTwo = function(callback) {
	console.log("2");
	callback(null, 'Second function result');
}
var functionThree = function(callback) {
	console.log("3");
	callback(null, 'Third function result');
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function(err, result) {
	console.log('Async parallel with array', result);
});


//With Object 
var stackObject = {};
stackObject.userName = function(callback) {
	callback(null, 'Bob');
}
stackObject.age = function(callback) {
	callback(null, '28');
}
stackObject.gender = function(callback) {
	callback(null, 'male');
}

async.parallel(stackObject, function(err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Async parallel with Object', result);
});