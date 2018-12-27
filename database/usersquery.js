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
// const login = email => Users()
//   .where('email', email)
//   .first();

module.exports = {
   create,
   getAll
};
