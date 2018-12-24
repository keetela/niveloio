const dotenv = require('dotenv');
// Update with your config settings.
dotenv.config();

module.exports = {
  test: {
    client: 'pg',
    connection: `${process.env.TESTDB_URL}`,
    migrations: {
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds/test`,
    },
  },
  development: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}`,
  },
};
