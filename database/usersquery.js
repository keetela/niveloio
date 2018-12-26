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

module.exports = {
   create,
   getAll
};
