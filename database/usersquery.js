/* eslint linebreak-style: ["error", "windows"] */
import knex from './knex';

// this is to get blog column from the db
function Users() {
  return knex('users');
}

// select all users from db
const getAll = () => Users().select();

// sign up new user
const create = user => Users().insert(user, 'id');

// sign in
// const create = user => Users().select(user, 'id');
const login = (user) => Users()
  .column('names', 'email', 'username', 'password', 'role', 'contributor', 'created_time')
  .select()
  .where({
    'email': user.email,
    'active': true
  })
  .first();

module.exports = {
   create,
   login,
   getAll
};
