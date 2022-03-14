

const options = process.env.NODE_ENV === 'production' ?
{
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: {
      "require": true,
      "rejectUnauthorized": false
    }
  } :


 {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'reddit_clone',
      user:     'postgres',
      password: 'rails'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  
 
  

module.exports = options;
