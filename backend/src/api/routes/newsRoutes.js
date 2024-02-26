"use strict";

const express = require("express");

const newsController = require("../controllers/newsController");

const router = express.Router();

const newsRoutes = (() => {
  router.route("/news/list").get(newsController.listNews);

  return router;
})();

module.exports = newsRoutes;
