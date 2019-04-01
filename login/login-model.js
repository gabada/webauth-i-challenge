const db = require('../data/dbConfig.js');

module.exports = {
  findBy
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}
