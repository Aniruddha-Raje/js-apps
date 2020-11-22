let requestBody = {
    "mobileNumber" : 123
}

const props = ["mobileNumber", "mobile_number", "mobNumber", "contact_number"];
const mobile = props.find((prop) => requestBody[prop]);

console.log("mobile => ", mobile);