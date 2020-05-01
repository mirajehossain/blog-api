module.exports = {
  test: {
    client: 'mysql',
    connection: 'postgres://localhost/test_db',
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/test`,
    },
  },
  development: {
    client: 'mysql',
    //   connection: 'mysql://ihubcomb_newuser:Amirajehossain@127.0.0.1/ihubcomb_blog_db',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'blog_db',
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`,
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'ihubcomb_newuser',
      password: 'Amirajehossain',
      database: 'ihubcomb_blog_db',
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/production`,
    },
  },
};
