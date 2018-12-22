import config from '../knexfile';

config.development;
module.exports = require('knex')(config.development);
