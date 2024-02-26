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

newsController.getNewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newsData = await newsServices.getNewsById(id);
    if (!newsData) {
      return res.status(404).json({ error: "News not found" });
    }
    res.status(200).json(newsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = newsController;
