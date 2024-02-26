"use strict";

const newsServices = require("../services/newsServices");

let newsController = {};

newsController.createNews = async (req, res) => {
  try {
    const data = req.body;

    let newsData = await newsServices.createNews(data);
    res.status(201).json(newsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

newsController.listNews = async (req, res) => {
  try {
    let newsListData = await newsServices.listNews();
    res.status(200).json(newsListData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = newsController;
