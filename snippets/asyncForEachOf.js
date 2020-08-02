var async = require('async');

var obj = {node: "Aniruddha", qa: "Jai", angular: "Prakhar"};
var obj2 = ["Shweta","Ankita","Aishwarya"];

async.forEachOf(obj, function (value, key, callback) {
    console.log("key => "+key);
    console.log("value => "+value);
}, function (err) {
    if (err) 
        console.error(err.message);
});
console.log('============================================================');

async.forEachOf(obj2, function (value, key, callback) {
    console.log("key => " + key);
    console.log("value => " + value);
}, function (err) {
    if (err) 
        console.error(err.message);
});
