// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});


// Create promise and SNS service object
var listTopicsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listTopics({}).promise();

// // Handle promise's fulfilled/rejected states
// listTopicsPromise.then(
//   function(data) {
//     console.log(data.Topics);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });


// // // Create promise and SNS service object
// // var createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "TOPIC_NAME"}).promise();

// // // Handle promise's fulfilled/rejected states
// // createTopicPromise.then(
// //   function(data) {
// //     console.log("Topic ARN is " + data.TopicArn);
// //   }).catch(
// //     function(err) {
// //     console.error(err, err.stack);
// //   });

// Create publish parameters
var params = {
  Message: 'Test Message', /* required */
  TopicArn: ''
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });

//   // Create promise and SNS service object
// var deleteTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).deleteTopic({TopicArn: 'TOPIC_ARN'}).promise();

// // Handle promise's fulfilled/rejected states
// deleteTopicPromise.then(
//   function(data) {
//     console.log("Topic Deleted");
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });