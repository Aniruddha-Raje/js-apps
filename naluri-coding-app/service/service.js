const CronJob = require('cron').CronJob;

let currPiValue = 0;
let radiusOfTheSun = 696265;

module.exports.calculatePiValue = async () => {
    let decimalCount = 2;
    console.log('desired value of PI => ', Math.PI);

    const job = new CronJob('*/5 * * * * *', function() {

        console.log("currPiValue => ", currPiValue);
        console.log("decimalCount => ", decimalCount);

        if( (currPiValue == Number((Math.PI).toFixed(decimalCount))) 
            && (currPiValue == Number((Math.PI).toFixed(decimalCount + 1))) ){
            job.stop();
        }
        else{
            currPiValue = Number((Math.PI).toFixed(decimalCount));
            decimalCount++;
        }
    });
    job.start();
};

module.exports.calculateCircumferenceOfTheSun = async () => {
    let response = {};
    response.metric = "kms";
    response.circumference_of_the_sun = 2*currPiValue*radiusOfTheSun;
    response.surface_area_of_the_sun = Math.pow(4*currPiValue*radiusOfTheSun, 2);
    return response;
};

module.exports.valueOfPi = async () => {
    let response = {};
    response.pi_value = currPiValue;

    return response;
};