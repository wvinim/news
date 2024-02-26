"use strict";

const express = require("express");

const router = express.Router();

const movieRoutes = (() => {
  router.route("/news/list").get((req, res) => {
    res.send("GET NEWS LIST SUCCESSFULL");
  });

  return router;
})();

module.exports = movieRoutes;
