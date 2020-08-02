const imageThumbnail = require('image-thumbnail');
const fs = require('fs');

let test = async () => {
    try {
        const thumbnail = await imageThumbnail('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/test.jpg');
        console.log(thumbnail);
    } catch (err) {
        console.error(err);
    }
};

test();