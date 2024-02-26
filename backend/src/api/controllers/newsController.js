"use strict";

const newsServices = require("../services/newsServices");

let newsController = {};

newsController.listNews = async (req, res) => {
  try {
    let newsListData = await newsServices.listNews();
    res.status(200).json(newsListData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = newsController;
