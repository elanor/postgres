const { Pool } = require('pg');

const pool = new Pool({
  user: 'melajus',
  host: 'http://test-assignment-db-1:5432',
  database: 'testdatabase',
  password: 'test123',
  port: 5433,
});

module.exports = pool;

