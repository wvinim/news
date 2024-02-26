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

  router
    .route("/news/:id")
    .get(newsMiddleware.validId, newsController.getNewsById);

  router
    .route("/news/:id")
    .put(
      [
        newsMiddleware.validId,
        newsMiddleware.hasNews,
        newsMiddleware.validateNews,
      ],
      newsController.updateNews
    );

  router
    .route("/news/:id")
    .delete(
      [newsMiddleware.validId, newsMiddleware.hasNews],
      newsController.deleteNews
    );

  return router;
})();

module.exports = newsRoutes;
