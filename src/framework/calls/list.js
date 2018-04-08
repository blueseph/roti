const list = dynamoDb => table => async () => {
  try {
    const params = {
      TableName: table.name,
    };

    const result = await dynamoDb.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: err.statusCode || 500,
    };
  }
};

module.exports = list;
