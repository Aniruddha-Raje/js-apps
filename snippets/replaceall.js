//Replace all instances in a JavaScript string.
var replaceall = require("replaceall");

var original = "hello world";

// "hello everyone goodbye everyone"
replaceall("world", "everyone", original);

// "hezzo worzd" 
replaceall("l", "z", original);
