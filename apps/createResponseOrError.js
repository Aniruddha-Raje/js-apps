module.exports.createError = async (request) => {
    
    if(request === 1){
        return "ok";
    }
    else{
        throw "Some Error";
    }
};