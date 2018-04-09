const roti = require('aws-roti');

const students = roti({
  name: 'students',
  partitionKey: 'studentId',
});

module.exports.get = async event => students.get(event);
module.exports.getAll = async event => students.list(event);
module.exports.post = async event => students.post(event);
module.exports.put = async event => students.put(event);
module.exports.put = async event => students.delete(event);
