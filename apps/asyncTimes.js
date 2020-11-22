var async = require('async');

// Pretend this is some complicated async factory
var createUser = function(id, callback) {
    callback(null, id);
};

// generate 5 users
async.times(5, function(count, next) {
    createUser(count, function(err, data) {
        next(err, data);
    });
}, function(err, data) {
    if (err) {
		console.error(err);
		return;
	}
	console.log('Result => \n', data);
});