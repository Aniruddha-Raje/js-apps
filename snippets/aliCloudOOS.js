let OSS = require('ali-oss');

let client = new OSS({
    region: '',
    accessKeyId: '',
    accessKeySecret: '',
    bucket: ''
});

async function put () {
    try {
        let result = await client.put('/processed/test.jpg','/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/test.jpg');
        console.log(result);
    } catch (err) {
        console.log (err);
    }
}

put();