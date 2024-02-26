const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  chapeu: {
    type: "String",
  },
  url: {
    type: "String",
  },
  titulo: {
    type: "String",
  },
  data_hora_publicacao: {
    type: "Date",
  },
  imagem: {
    type: "String",
  },
  thumbnail: {
    type: "String",
  },
  conteudo: {
    type: "String",
  },
});

module.exports = mongoose.model("News", NewsSchema);
