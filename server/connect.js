const { Pool } = require('pg');

const pool = new Pool({
  user: 'josefberthoud',
  host: 'localhost',
  database: 'squadblaster',
  password: '',
  port: 5432
});

module.exports = pool;