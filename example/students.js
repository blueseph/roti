const roti = require('roti');

const students = roti().table({
  name: 'students',
  partitionKey: 'studentId',
});

module.exports.get = async event => students(event).get();
module.exports.getAll = async event => students(event).list();
module.exports.post = async event => students(event).post();
module.exports.put = async event => students(event).put();
module.exports.put = async event => students(event).delete();
