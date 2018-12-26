
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          names: 'Gilles',
          username: 'kagarama',
          email: 'kagarama@ora.rw',
          password: 'ibiryo',
      }
      ]);
    });
};
