const https = require("https");

const url = "https://jsonplaceholder.typicode.com/posts/1";

https.get(url, res => {
    console.log('res => ', res);
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
    console.log('Data body => ', body);
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log('end body => ',body);
  });
});