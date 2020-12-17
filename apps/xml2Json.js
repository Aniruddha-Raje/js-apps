var parseString = require('xml2js').parseString;

let xml = ``

parseString(xml, function (err, response) {
    console.dir(response);
});