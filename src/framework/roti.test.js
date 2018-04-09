const roti = require('./roti');

describe('roti', () => {
  it('should load', () => {
    expect(roti()).toBeDefined();
  });
});
