let service = require('./exportService');

let test = async function (){
    await service.service(1,"Ani");
};

test();