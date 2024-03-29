"use strict";

const NewsModel = require("../models/News");

let newsServices = {};

newsServices.createNews = async (data) => {
  const newNews = await new NewsModel(data);
  return await newNews.save();
};

newsServices.listNews = async () => {
  const newsList = await NewsModel.aggregate([
    { $sort: { data_hora_publicacao: -1 } },
    {
      $project: {
        _id: 0,
        id: "$_id",
        chapeu: "$chapeu",
        url: "$url",
        titulo: "$titulo",
        data_hora_publicacao: "$data_hora_publicacao",
        imagem: "$imagem",
        thumbnail: "$thumbnail",
        conteudo: "$conteudo",
      },
    },
  ]);
  return newsList;
};

newsServices.getNewsById = async (id) => {
  const newsData = await NewsModel.findOne({ _id: id });
  return newsData;
};

newsServices.updateNews = async (id, newsData) => {
  return await NewsModel.updateOne({ _id: id }, { $set: newsData });
};

newsServices.deleteNews = async (id) => {
  return await NewsModel.deleteOne({ _id: id });
};

module.exports = newsServices;
