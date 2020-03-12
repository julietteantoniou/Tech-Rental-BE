const prodConn = process.env.DB_URL || "postgres://rnbytcbb:ln0VK_iVRDzZpSpthoNdS9y42NwWkL_R@drona.db.elephantsql.com:5432/rnbytcbb"

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: prodConn,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // },
  },

  staging: {
    client: 'pg',
    connection: prodConn,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'pg',
    connection: prodConn,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

};
