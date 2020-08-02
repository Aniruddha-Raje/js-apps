var axios = require('axios');

const formUrlEncoded = x =>
   Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

let url = "";
let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
let data = formUrlEncoded({
  
});

axios({ method: 'POST', url: url, headers: headers, data: data })
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
})

// axios({
//     url: 'https://staging-api.shasso.com/sso/requestUID',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     data: formUrlEncoded({
//         S3ID: "dff213f4785555371747b6138e91514a",
//         service: "g2g_lambda",
//         signature: "6859e23d225219ad6983a60209d5d8bf"
//     })
//   })
//   .then(function(response) {
//     console.log(response.data);
//     console.log(JSON.parse(response.data));
//   })
//   .catch(function(error) {
//     console.log(error)
//   })

