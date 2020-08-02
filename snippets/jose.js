var jose = require('node-jose');

let input = {
    "data": "Secure this"
}
let key = "Some secret";

jose.JWE.createEncrypt(key).
        update(Buffer.from(input)).
        final().
        then(function(result) {
            console.log(result);
          // {result} is a JSON Object -- JWE using the JSON General Serialization
        });