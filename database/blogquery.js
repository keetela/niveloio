import knex from "./knex";

function Posts() {
  return knex("blog");
}

function getAll() {
  return Posts().select();
}

module.exports = {
  getAll: getAll
};
