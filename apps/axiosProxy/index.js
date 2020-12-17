var axios = require('axios');

exports.handler = async (event) => {

    var url = "";

    var headers = {
        "Content-Type": "application/json"
    };
    
    var data = {
        
    };
    
    await axios({ method: 'POST', url: url, headers: headers, data: data })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };

    return response;
};