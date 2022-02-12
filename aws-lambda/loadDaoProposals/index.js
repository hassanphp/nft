const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handler = async () => {
    console.log("Processing");
    const params = {
        TableName: "dao_proposal"
    };
    
    let scanResults = [];
    let items;

    do {
        items = await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    console.log("results", scanResults);

    return {
        statusCode: 200,
        body: JSON.stringify(scanResults)
    };
};
