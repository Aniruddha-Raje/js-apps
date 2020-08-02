function Greetr() {
	this.greeting = 'Greet 4 Hello world!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = Greetr;