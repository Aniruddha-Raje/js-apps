var AWS = require('aws-sdk');
const util = require('util');
let fs   = require('fs');
let path   = require('path');

AWS.config.update({region:'ap-southeast-1'});
var kms = new AWS.KMS({apiVersion: '2014-11-01'});

let test = async () => {

    try {

        let text = await Buffer.from('Tempo Scan Tower, Kav. 3-4, Lalamove Lt.26,, Jl. HR Rasuna Said, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia','utf-8');
        
        var encryptionParams = {
            KeyId: "xx-x-x-x-x",
            Plaintext: text
        };

        let kmsEncrypt = util.promisify(kms.encrypt).bind(kms);
        let encryptedData = await kmsEncrypt(encryptionParams);
        // let encryptedData = await kms.encrypt(encryptionParams);

        //encryptedData contained 2 parts, CiphertextBlob and KeyId
        // console.log('encryptedData => \n', encryptedData);
        console.log('\nencryptedData.CiphertextBlob => \n', encryptedData.CiphertextBlob);
        // console.log('\nencryptedData.KeyId => \n', encryptedData.KeyId);
        
        let buff = Buffer.from(encryptedData.CiphertextBlob);
        // console.log("\nbuff 1 => \n", buff);
        
        let encryptedBase64data = buff.toString('base64');
        console.log("\nencryptedBase64data => \n", encryptedBase64data);

        console.log("\n================================================");

        let rebuff = Buffer.from(encryptedBase64data, 'base64');
        // console.log("\nrebuff 2 => \n", rebuff);
        
        var decryptionParams = {
            CiphertextBlob : rebuff
        };

        let kmsDecrypt = util.promisify(kms.decrypt).bind(kms);
        let decryptedData = await kmsDecrypt(decryptionParams);

        //decryptedData contained 2 parts, Plaintext and KeyId
        // console.log('\ndecryptedData => \n', decryptedData);
        // console.log('\ndecryptedData.Plaintext => \n', decryptedData.Plaintext);
        // console.log('\ndecryptedData.KeyId => \n', decryptedData.KeyId);

        let buff2 = Buffer.from(decryptedData.Plaintext, 'base64');  
        let originalText = buff2.toString('ascii');
        console.log(originalText);
    } catch (error) {
        console.log('\nerror => \n',error);
    }
};

test();