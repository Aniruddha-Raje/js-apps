var async = require('async');

var obj = { node: "Aniruddha", qa: "Jai", angular: "Prakhar" };
var obj2 = ["Shweta", "Ankita", "Aishwarya"];

async.each(obj2, function (temp, callback) {
    console.log(temp);
});