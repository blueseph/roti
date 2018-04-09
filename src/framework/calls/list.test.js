const list = require('./list');

describe('list', () => {
  it('should property return the items passed in via ddb', async () => {
    const results = ['a', 'b', 'c'];
    const ddb = {
      scan: () => ({
        promise: async () => ({
          Items: results,
        }),
      }),
    };
    const table = {};

    const items = await list(ddb)(table)();

    expect(items).toEqual({
      body: JSON.stringify(results),
      statusCode: 200,
    });
  });

  it('should property throw if the ddb call throws', async () => {
    const ddb = {
      scan: () => ({
        promise: async () => {
          throw new Error({
            statusCode: 500,
          });
        },
      }),
    };
    const table = {};

    const items = await list(ddb)(table)();

    expect(items).toEqual({
      statusCode: 500,
    });
  });
});
