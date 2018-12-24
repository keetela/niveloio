import knex from './knex';
import Post from '../controllers/blog';

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

// publish newly created post
const publish = (blogID, updates) => Posts()
  .where('id', parseInt(blogID))
  .update(updates);

// create a new blog post
const create = blog => Posts().insert(blog, 'id');

const deletePost = blogID => Posts()
  .where('id', parseInt(blogID))
  .del();

module.exports = {
  getAll,
  getOne,
  publish,
  create,
  deletePost,
};
