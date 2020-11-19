async function getCrmzCredentials() {
  let response = await fetch(
    "https://crm-uat.amtrust.asia:8081/login/permissions",
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        userName: "digitalDistribution",
        password: "Dy9&g5%X"
      })
    }
  );

  let data = await response.json();
  return data;
}

async function getProduct(apiKey) {
  let response = await fetch(
    "https://crm-uat.amtrust.asia:8083/productapi/products/SES_PH_RET_2Y",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "x-api-key": apiKey
      })
    }
  );

  let data = await response.json();
  return data;
}

getCrmzCredentials().then(crmzCreds => {
  console.log("getCrmzCredentials response => ", crmzCreds);

  getProduct(crmzCreds.jwtToken.accessToken).then(productDetails => {
    console.log("productDetails => ", productDetails);
  });
});

// let test1 = async () => {
//     let a = {};
//     a.aa = "aa";

//     await test2(a);
//     console.log(a);
//     return a;
// };

// let test2 = async (a) => {
//     a.bb = "bb";

//     return true;
// };

// test1()

// let postUrl = "";
// let data = {
// };

fetch(postUrl, {
  method: "POST",
  headers: new Headers({
    "Content-Type": "application/json",
    Authorization: ""
  }),
  body: JSON.stringify(data)
})
  .then(function(response) {
    console.log("success =>\n", response);
  })
  .catch(function(error) {
    console.log("error =>\n", error);
  });

// getUrl = "";
// fetch(getUrl, {
//     method : "GET",
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': ''
//     })
// })
// .then(function(response) {
//     console.log('success =>\n', response);
// })
// .catch(function(error) {
//     console.log('error =>\n', error);
// });

// fetch("", {
//     method : "PUT",
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': ''
//     }),
//     body: JSON.stringify(""),
// })
// .then(function(response) {
//     console.log('success =>\n', response);
//     console.log('success =>\n', response.status);
// })
// .catch(function(error) {
//     console.log('error =>\n', error);
// });
