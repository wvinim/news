const request = require("supertest");

const getNewsByIdHelper = async (app, id = "") => {
  return await request(app).get(`/api/news/${id}`);
};

module.exports = getNewsByIdHelper;
