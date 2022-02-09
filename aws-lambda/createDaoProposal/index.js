const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

const decode = (encrypted) => {
    let bufferObj = Buffer.from(encrypted, "base64");
    return bufferObj.toString("utf8");
}

exports.handler = async (event, context, callback) => {
    try {
        console.log("Processing:", event, context);
        let decoded = decode(event.body);
        var obj = JSON.parse(decoded);
        const params = {
            Item: {
                proposal_id: context.awsRequestId,
                time_created: Date.now(),
                title: obj.title,
                description: obj.description
            },
            TableName: "dao_proposal"
        };
    
        await docClient.put(params).promise();
        console.log("Item entered successfully", params);
        const response = {
            statusCode: 200,
            body: JSON.stringify('Uploaded!')
        };
        callback(null, response);
    } catch (error) {
        const response = {
            statusCode: 400,
            body: JSON.stringify('Failed!')
        };
        callback(response, null);
    }
};