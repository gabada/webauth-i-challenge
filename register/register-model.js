const db = require('../data/dbConfig.js');

module.exports = {
  addUser
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function addUser(users) {
  const [id] = await db('users').insert(users);
  return findById(id);
}
