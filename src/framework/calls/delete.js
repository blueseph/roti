const del = dynamoDb => table => async (event) => {
  const params = {
    TableName: table.name,
    Key: {
      [table.partitionKey]: event.pathParameters.id,
    },
  };

  try {
    await dynamoDb.delete(params).promise();

    return {
      statusCode: 204,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: err.statusCode || 500,
    };
  }
};

module.exports = del;
