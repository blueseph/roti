const createExpressionsQuery = (values) => {
  const query = Object.values(values).reduce(
    (aggregate, key) => `${aggregate}#${key} = :${key},`
    , 'SET ');

  return query.substring(0, query.length - 1);
};

module.exports = createExpressionsQuery;
