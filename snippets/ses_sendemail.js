var AWS = require('aws-sdk');
let util = require('util');

let test = async() => {
  try {
    AWS.config.update({region: 'us-east-1'});

    let params = {
      Destination: {
        ToAddresses: [
          ''
        ]
      },
      Message: {
        Body: {
          Html: {
           Charset: "UTF-8",
           Data: "HTML_FORMAT_BODY"
          },
          Text: {
           Charset: "UTF-8",
           Data: "TEXT_FORMAT_BODY"
          }
         },
         Subject: {
          Charset: 'UTF-8',
          Data: 'Test email'
         }
        },
      Source: 'SENDER_EMAIL_ADDRESS'
    };
    
    var client = new AWS.SES({apiVersion: '2010-12-01'});
    
    let sesSendEmail = util.promisify(client.sendEmail).bind(client);
    let data = await sesSendEmail(params);
    console.log(data.MessageId);
  } catch (error) {
    console.error(err, err.stack);
  }

};

test();