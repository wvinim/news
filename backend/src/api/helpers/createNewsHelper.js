const request = require("supertest");

const mockNews = {
  chapeu: "chapeu mock",
  url: "https://www.estadao.com.br/noticia-mock/",
  titulo: "titulo mock",
  imagem: "url_imagem_mock.jpg",
  thumbnail: "url_thumbnail_mock.jpg",
  conteudo: "conteudo mock",
};

const createNewsHelper = async (app, data = mockNews) => {
  return await request(app).post("/api/news/create").send(data);
};

module.exports = createNewsHelper;
