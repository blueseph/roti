const get = require('./calls/get');
const list = require('./calls/list');
const post = require('./calls/post');
const put = require('./calls/put');
const del = require('./calls/delete');

const roti = dynamoDb => table => ({
  get: get(dynamoDb)(table),
  list: list(dynamoDb)(table),
  post: post(dynamoDb)(table),
  put: put(dynamoDb)(table),
  delete: del(dynamoDb)(table),
});

module.exports = roti;
