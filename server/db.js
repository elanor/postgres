const { Pool } = require('pg');

const pool = new Pool({
  user: 'melajus',
  host: 'localhost',
  database: 'testdatabase',
  password: 'tizanuda',
  port: 5433,
});

module.exports = pool;

