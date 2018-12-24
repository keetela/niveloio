exports.up = function (knex, Promise) {
  return knex.schema.createTable('blog', (table) => {
    table.increments();
    table
      .string('title')
      .notNullable()
      .unique();
    table.string('content').notNullable();
    table.boolean('publish').notNullable();
    table.boolean('unpublish').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('blog');
};
