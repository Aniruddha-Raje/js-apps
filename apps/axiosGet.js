var axios = require("axios");

let getTestUsingPromises = async () => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: ""
  };

  var url = "";

  axios
    .get(url, { headers: headers })
    .then(response => {
      console.log("response => \n", response);
      console.log("=================");
      console.log("response.data => \n", response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

let getTest = async () => {
  try {
    var headers = {
      "Content-Type": "application/json",
      "Bolt-Tenant-Id": "PHSAMSUOEMDG01",
      "Bolt-Country-Code": "PH"
    };

    var url =
      "https://api.staging.device.bolttech.asia/v1/device/info/353408111150619";

    let apiResponse = await axios({
      method: "GET",
      url: url,
      headers: headers
    });
    console.log("apiResponse => ", apiResponse);
    console.log("apiResponse.data => ", apiResponse.data);
  } catch (error) {
    console.error(error);
  }
};

//getTestUsingPromises();
getTest();
