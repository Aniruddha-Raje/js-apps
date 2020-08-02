var async = require('async');

//async.waterfall allows each function to pass its results on to the next function 
//aync.series executes sequentially and passes all results directly to the final callback
//aync.parallel executes in parallel and passes all results to the final callback

var waterfallFunctionArray = [];
var retry = 2;

var functionOne = function(callback) {
    console.log("ONE");

    async.waterfall([
        function(callback) {
            console.log("A");
            callback(null, "ok");
        },
        function(response, callback) {
            console.log("B");
            callback(null, response);
        }
    ],
    function(err, resp) {
        
        let response = {};
        if (err) {
            console.log("Error",err);
            callback(err,response);
        } 
        else {
            callback(null, response);
        }
    });
};
var functionTwo = function(param1, callback) {
    console.log("TWO");
    callback(null, param1+param1);
};
var functionThree = function(param2, callback) {
    console.log("THREE");
    callback(null, "Done");
};

waterfallFunctionArray.push(functionOne);
waterfallFunctionArray.push(functionTwo);
waterfallFunctionArray.push(functionThree);

async.waterfall(waterfallFunctionArray, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    else{
        console.log("WATERFALL RESULT => \n"+result);

        while(retry != 0){
            console.log("Retry => ", retry);

            async.waterfall(waterfallFunctionArray, function (err, result) {
                if (err) {
                    console.error(err);
                    return;
                }
                else{
                    retry = retry -1;
                    console.log("WATERFALL RESULT => \n"+result);
                }
            });
        }
    }
});