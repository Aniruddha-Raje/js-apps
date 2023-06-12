import * as AWS from 'aws-sdk';
import * as util from 'util';

export const handler = async (event) => {
  let response;

  await AWS.config.update({region: 'ap-southeast-1'});
  const sqsClient = await new AWS.SQS({apiVersion: '2012-11-05'})

  const params = {
    MessageBody: "{}",
    QueueUrl: "https://sqs.ap-southeast-1.amazonaws.com/793845992888/crmz-lms-prod"
  };

  try {
    let sqsSendMessage = util.promisify(sqsClient.sendMessage).bind(sqsClient);
    let sendMessageResponse = await sqsSendMessage(params);
    console.log("sendMessageResponse => ", sendMessageResponse);

    response = {
      statusCode: 200,
    };
    return response;
  }
  catch (err) {
    console.log("Error", err);
  }

};

handler({message: "hello"})