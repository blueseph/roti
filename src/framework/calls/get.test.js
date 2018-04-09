const get = require('./get');

describe('get', () => {
  it('should property return the items passed in via ddb', async () => {
    const results = {
      hello: 'hey!',
    };
    const ddb = {
      get: () => ({
        promise: async () => ({
          Item: results,
        }),
      }),
    };
    const table = {
      name: 'hello',
      partitionKey: 'helloId',
    };
    const event = {
      pathParameters: {
        id: 'abc',
      },
    };

    const items = await get(ddb)(table)(event);

    expect(items).toEqual({
      body: JSON.stringify(results),
      statusCode: 200,
    });
  });

  it('should property throw if the ddb call throws', async () => {
    const ddb = {
      get: () => ({
        promise: async () => {
          throw new Error({
            statusCode: 500,
          });
        },
      }),
    };
    const table = {
      name: 'hello',
      partitionKey: 'helloId',
    };
    const event = {
      pathParameters: {
        id: 'abc',
      },
    };

    const items = await get(ddb)(table)(event);

    expect(items).toEqual({
      statusCode: 500,
    });
  });
});
