const createExpressionsObject = (model) => {
  const timestamp = new Date().getTime();

  const entries = Object.entries(model);

  const expressions = entries.reduce(
    (attributes, [key, val]) => ({
      ExpressionAttributeNames: {
        ...attributes.ExpressionAttributeNames,
        [`#${key}`]: key,
      },
      ExpressionAttributeValues: {
        ...attributes.ExpressionAttributeValues,
        [`:${key}`]: val,
      },
    }),
    {
      updatedAt: timestamp,
    },
  );

  return expressions;
};

module.exports = createExpressionsObject;
