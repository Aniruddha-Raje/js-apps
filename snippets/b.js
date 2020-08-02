let service = require('./b1');

let test2 = async function (){
    let timeInMs = Math.random() * (3000);
    console.log('timeInMs => ', timeInMs);
    
    let response = await setTimeout(await service.test,timeInMs,'Aniruddha','Raje');
    console.log('response => ', response);
};

test2();