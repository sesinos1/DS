// Update with your config settings.

//different environments
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/diabetes_manager.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: ( conn , done ) => {
        conn.run( 'PRAGMA foreign_keys = ON' , done )
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  //TESTS SETUP ⬇︎
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/tests.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};