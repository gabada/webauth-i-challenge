const db = require('../data/dbConfig.js');

module.exports = {
  addUser
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function addUser(users) {
  return db('users')
    .insert(users)
    .then(ids => {
      return findById(ids[0]);
    });
}
