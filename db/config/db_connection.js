module.exports.knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'blog_db',
  },
  pool: { min: 0, max: 7 },
});


