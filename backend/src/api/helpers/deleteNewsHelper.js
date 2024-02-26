const request = require("supertest");

const deleteNewsHelper = async (app, id = "") => {
  return await request(app).delete(`/api/news/${id}`).send();
};

module.exports = deleteNewsHelper;
