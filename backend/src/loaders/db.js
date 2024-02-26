const mongoose = require("mongoose");
const { DB_HOST, DB_PORT, DB_NAME, NODE_ENV } = require("../config");

let uri = `mongodb://${DB_HOST}:${DB_PORT}`;

let mongo = undefined;

const setUpDatabase = async () => {
  try {
    if (NODE_ENV === "test") {
      const { MongoMemoryServer } = require("mongodb-memory-server");
      mongo = await MongoMemoryServer.create();
      uri = mongo.getUri();
    }
    await mongoose.connect(uri, { dbName: DB_NAME });
  } catch (error) {
    console.log(error);
  }
};

const dropDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (mongo) {
    await mongo.stop();
  }
};

const dropCollections = async () => {
  if (mongo) {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  }
};

module.exports = {
  setUpDatabase,
  dropDatabase,
  dropCollections,
};
