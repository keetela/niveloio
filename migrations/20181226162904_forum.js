exports.up = function (knex, Promise) {
    return knex.schema.createTable('forum', (table) => {
      table.increments();
      table
        .string('title')
        .notNullable()
        .unique();
      table.string('content').notNullable();
      table.boolean('draft').notNullable();
      table.datetime('created_time').defaultTo(knex.fn.now());
      table.timestamp('updated_time').defaultTo(knex.fn.now());
      table.boolean('publish').notNullable();
      table.boolean('unpublish').notNullable();
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('forum');
};
  