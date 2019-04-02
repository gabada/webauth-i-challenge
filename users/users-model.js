const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findBy
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}
