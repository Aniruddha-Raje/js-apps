var async = require('async');

let arr = ['1','2'];

async.eachSeries(arr,function(item,callback){
    console.log('item => '+item);
},
function(err, results) {
    console.log('here');
    if (err) {
        console.log(err);
    }
    else{
        console.log("success");
    }
});
console.log('here2');