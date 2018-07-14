const uuid = require('uuid');

const post = dynamoDb => table => async (event) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body || {});

  const params = {
    TableName: table.name,
    Item: {
      ...data,
      [table.partitionKey]: uuid.v4(),
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  try {
    await dynamoDb.put(params).promise();
  } catch (err) {
    console.error(err);

    return {
      statusCode: err.statusCode || 500,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(params.Item),
  };
};

module.exports = post;
