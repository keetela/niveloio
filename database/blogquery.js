import knex from './knex';

function Posts() {
  return knex('blog');
}

const getAll = () => Posts().select();

const getOne = blogID => Posts()
  .where('id', parseInt(blogID))
  .first();

module.exports = {
  getAll,
  getOne,
};
