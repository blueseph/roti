const get = dynamoDb => table => async (event) => {
  const params = {
    TableName: table.name,
    Key: {
      [table.partitionKey]: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: err.statusCode || 500,
    };
  }
};

module.exports = get;
