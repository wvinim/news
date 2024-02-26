const request = require("supertest");

const mockNews = {
  chapeu: "chapeu mock update",
  url: "https://www.estadao.com.br/noticia-mock-update/",
  titulo: "titulo mock update",
  imagem: "url_imagem_mock_update.jpg",
  thumbnail: "url_thumbnail_mock_update.jpg",
  conteudo: "conteudo mock update",
};

const updateNewsHelper = async (app, id = "", data = mockNews) => {
  return await request(app).put(`/api/news/${id}`).send(data);
};

module.exports = updateNewsHelper;
