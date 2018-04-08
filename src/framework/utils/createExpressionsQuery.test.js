const createExpressionsQuery = require('./createExpressionsQuery');

describe('create expressions query', () => {
  it('should properly create a simple expressions query', () => {
    const body = {
      '#firstName': 'firstName',
      '#lastName': 'lastName',
    };

    expect(createExpressionsQuery(body)).toBe('SET #firstName = :firstName,#lastName = :lastName,');
  });
});
