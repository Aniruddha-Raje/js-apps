//String to Hash
let data = 'test';  

//Encoding
let buff = Buffer.from(data);  
let base64data = buff.toString('base64');

//Decoding
let buff2 = Buffer.from(base64data, 'base64');  
let originalText = buff2.toString('ascii');

//Outputs
console.log("Encoded => ",base64data);
console.log("Decoded => ",originalText);