const del = require('./delete');

describe('delete', () => {
  it('should property return the items passed in via ddb', async () => {
    const results = {
      hello: 'hey!',
    };
    const ddb = {
      delete: () => ({
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

    const items = await del(ddb)(table)(event);

    expect(items).toEqual({
      statusCode: 204,
    });
  });

  it('should property throw if the ddb call throws', async () => {
    const ddb = {
      delete: () => ({
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

    const items = await del(ddb)(table)(event);

    expect(items).toEqual({
      statusCode: 500,
    });
  });
});
