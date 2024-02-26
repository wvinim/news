"use strict";

const express = require("express");

const newsController = require("../controllers/newsController");
const newsMiddleware = require("../middlewares/newsMiddleware");

const router = express.Router();

const newsRoutes = (() => {
  router
    .route("/news/create")
    .post(newsMiddleware.validateNews, newsController.createNews);

  router.route("/news/list").get(newsController.listNews);

  router.route("/news/:id").get(newsController.getNewsById);

  return router;
})();

module.exports = newsRoutes;
