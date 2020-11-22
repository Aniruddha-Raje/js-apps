let fs = require('fs');
let util = require('util');

let test = async (filePath, fileContent) => {
    let fsWriteFile = util.promisify(fs.writeFile).bind(fs);
    await fsWriteFile(filePath, fileContent);
};

test('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/md5TestFile.txt','Aniruddha');