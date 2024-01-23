const { Pool } = require('pg');

const pool = new Pool({
  user: 'melajus',
  host: 'test-assignment-db-1',
  database: 'testdatabase',
  password: 'test123',
  port: 5433,
});

module.exports = pool;

