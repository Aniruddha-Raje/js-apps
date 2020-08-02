function greet(callback) {
	console.log('\nHello!');
	var data = {
		name: 'John Doe'
	};
	
	callback(data);
}

greet(function(data) {
	console.log('1st callback was invoked!');
	console.log(data);
	console.log("\n");
});

greet(function(data) {
	console.log('2nd callback was invoked!');
	console.log(data.name);
});