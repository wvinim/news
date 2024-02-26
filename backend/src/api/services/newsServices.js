"use strict";

const NewsModel = require("../models/News");

let newsServices = {};

newsServices.createNews = async (data) => {
  const newNews = await new NewsModel(data);
  return await newNews.save();
};

newsServices.listNews = async () => {
  const newsList = await NewsModel.aggregate([
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

module.exports = newsServices;
