import { Client } from "@googlemaps/google-maps-services-js";

const getLatLongFromAddress = async () => {
  const client = new Client();

  const geoCodeResponse = await client.geocode({
    params: {
      address: "",
      key: ""
    }
  });

  console.log("geoCodeResponse => ", JSON.stringify(geoCodeResponse.data));
};

getLatLongFromAddress();
