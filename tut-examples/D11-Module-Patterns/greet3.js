function Greetr() {
	this.greeting = 'Greet 3 Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = new Greetr();