import knex from './knex';

// this is to get forum column from the db
function Forums() {
  return knex('forum');
}
// this to fetch all forum_posts from the db
const getAll = () => Forums().select();
// this is to get one forum post from the db
const getOne = forumId => Posts()
  .where('id', parseInt(forumId))
  .first();
// this to publish a forum post  
const publish = (forumId, updates) => Forums()
  .where('id', parseInt(forumId))
  .update(updates);
// this to unpublish a forum post  
const unpublish = (forumId, updates) => Forums()
  .where('id', parseInt(forumId))
  .update(updates);
// this to draft a new forum post  
const draft = (forumPost) => Forums().insert(forumPost, 'id');

module.exports = {
  getAll,
  getOne,
  publish,
  unpublish,
  draft
};
