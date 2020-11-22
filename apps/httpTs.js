var https = require("https");
var options = {
  hostname: "crm-uat.amtrust.asia:8083/productapi/products/SES_PH_RET_2Y",
  port: 443,
  method: "GET",
  headers: {
    "x-api-key":
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWdpdGFsRGlzdHJpYnV0aW9uIiwicm9sZSI6IjEwLDMsMyIsInBvc3RhbEFkZHJlc3MiOiJyZWdpb25hbCIsImF1dGhVcGRhdGlvblJlcXVpcmVkIjpmYWxzZSwiZ2lkTnVtYmVyIjoiNTA1IiwiZXhwIjoxNTk0MjI5MzU4LCJpYXQiOjE1OTQxNDI5NTh9.3W2acUfimysj1MzM3gJzS-eRRU4N4O0I6zrAZ-esrXT_s5sGERfFzuzTxGPX2uk3n0hV4NZXX0iqxql-zXb62w"
  }
};
var req = https.request(options, function(res) {
  console.log("statusCode:", res.statusCode);
  console.log("headers:", res.headers);
  res.on("data", function(d) {
    process.stdout.write(d);
  });
});
req.on("error", function(e) {
  console.error(e);
});
req.end();
