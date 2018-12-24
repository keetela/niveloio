import knex from './knex';

// this is to get blog column from the db
function Posts() {
  return knex('blog');
}
// this to fetch all posts from the db
const getAll = () => Posts().select();
// this is to get one post from the db
const getOne = blogID => Posts()
  .where('id', parseInt(blogID))
  .first();
const publish = (blogID, updates) => Posts()
  .where('id', parseInt(blogID))
  .update(updates);
module.exports = {
  getAll,
  getOne,
  publish,
};
