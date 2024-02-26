const { DB_HOST, DB_PORT, DB_NAME } = require("./src/config");

let uri = `mongodb://${DB_HOST}:${DB_PORT}`;

const config = {
  mongodb: {
    url: uri,
    databaseName: DB_NAME,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "migrations_changelog",
  moduleSystem: "esm",
};

module.exports = config;
