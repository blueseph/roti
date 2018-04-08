const createExpressionsQuery = values => Object.values(values).reduce(
  (query, key) => `${query}#${key} = :${key},`
  , 'SET ',
);

module.exports = createExpressionsQuery;
