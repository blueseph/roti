const createExpressionsObject = require('../utils/createExpressionsObject');
const createExpressionsQuery = require('../utils/createExpressionsQuery');

const post = dynamoDb => table => async (event) => {
  const data = JSON.parse(event.body);

  const expressionsObject = createExpressionsObject(data);

  const expression = createExpressionsQuery(expressionsObject.ExpressionAttributeNames);

  const params = {
    TableName: table.name,
    Key: {
      [table.partitionKey]: event.pathParameters.id,
    },
    ...expressionsObject,
    UpdateExpression: expression,
    ReturnValues: 'ALL_NEW',
  };

  try {
    const result = await dynamoDb.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: err.statusCode || 500,
    };
  }
};

module.exports = post;
