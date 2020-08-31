module.exports.createApiResponse = async (status, error, result) => {
    
    apiResponse = {};

    apiResponse.status = status;
    apiResponse.error = error;
    apiResponse.result = result;

    return apiResponse;
}