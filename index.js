exports.handler = async (event) => {
    // TODO implement
    
    let name = event.queryStringParameters.name;
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from ' + name),
    };
    return response;
};