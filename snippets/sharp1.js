const sharp = require('sharp');

let test = async () => {

    //await positionTests();

    await sharp('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/test.jpg')
    .sharpen()
    .toFile('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/sharp/enhancedTest.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

};

test();