const dotenv = require("dotenv");
// Update with your config settings.
dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}`
  }
};
