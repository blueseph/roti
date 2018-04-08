const createExpressionsObject = require('./createExpressionsObject');

describe('create expressions object', () => {
  it('should create a simple expressions object', () => {
    const body = {
      firstName: 'user',
      lastName: 'bruce',
    };

    const expression = createExpressionsObject(body);

    expect(expression).toEqual({
      ExpressionAttributeNames: {
        '#firstName': 'firstName',
        '#lastName': 'lastName',
      },
      ExpressionAttributeValues: {
        ':firstName': body.firstName,
        ':lastName': body.lastName,
        ':updatedAt': expression.ExpressionAttributeValues[':updatedAt'],
      },
    });
  });
});
