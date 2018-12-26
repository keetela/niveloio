
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', (table) => {
      table.increments().primary();
      table.string('names', 60).notNullable();
      table.string('username');
      table.string('email');
      table.string('password').notNullable();
      table.datetime('created_time').defaultTo(knex.fn.now());
      table.timestamp('updated_time').defaultTo(knex.fn.now());
      table.boolean('active').defaultTo(true);
      table.enu('role', ['user', 'admin']).defaultTo('user');
      table.boolean('contributor').defaultTo(false);
      table.string('motto');
      table.string('bio');
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('users');
};
