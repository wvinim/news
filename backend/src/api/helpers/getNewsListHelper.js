const request = require("supertest");

const getNewsListHelper = async (app) => {
  return await request(app).get("/api/news/list");
};

module.exports = getNewsListHelper;
