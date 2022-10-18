
module.exports = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: 'src/database/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: 'src/database/seeds',
  },
};
