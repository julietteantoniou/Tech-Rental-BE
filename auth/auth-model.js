const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findBy,
  findById,
  findUsers,
  update,
  destroy
};


function findUsers() {
    return db('users');
  }

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
    return db('users')
      .insert(user, 'id')
      .then(ids => ({ id: ids[0] }));
  }

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function destroy(id) {
  return db('users')
    .where('id', id)
    .del();
}