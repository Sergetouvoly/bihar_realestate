const sworm = require('sworm');

const db = sworm.db({
  driver: 'pg',
  config: {
    host: 'localhost',
    database: 'touvoly',
    user: 'root',
    password: 'root',
  }
});


module.exports = db