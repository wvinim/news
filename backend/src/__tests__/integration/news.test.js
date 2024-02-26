const mongoose = require("mongoose");

const { dropDatabase } = require("../../loaders/db");
const getNewsListHelper = require("../../api/helpers/getNewsListHelper");
const createNewsHelper = require("../../api/helpers/createNewsHelper");
const getNewsByIdHelper = require("../../api/helpers/getNewsByIdHelper");
const updateNewsHelper = require("../../api/helpers/updateNewsHelper");

let app;

beforeAll(() => {
  app = require("../../app");
});

afterAll(async () => {
  await dropDatabase();
  await app.close();
});

beforeEach(async () => {
  await mongoose.connection.dropDatabase();
});

describe("Integration Testing News", () => {
  test("It should do create news", async () => {
    const newNews = await createNewsHelper(app);
    expect(newNews.statusCode).toBe(201);
    expect(newNews.body._id).toBeTruthy();
  });

  test("It should throw an error on create news", async () => {
    const newNews = await createNewsHelper(app, {
      url: "non-url",
    });
    expect(newNews.statusCode).toBe(400);
  });

  test("It should get news list", async () => {
    await createNewsHelper(app);

    const newsList = await getNewsListHelper(app);
    expect(newsList.statusCode).toBe(200);

    expect(newsList.body.length).toBeGreaterThan(0);
  });

  test("It should get news by id", async () => {
    const newNews = await createNewsHelper(app);

    const newsById = await getNewsByIdHelper(app, newNews.body._id);

    expect(newsById.statusCode).toBe(200);
    expect(newsById.body.url).toBe(newNews.body.url);
  });

  test("It should throw an error on get invalid news by id", async () => {
    const newsById = await getNewsByIdHelper(app);

    expect(newsById.statusCode).toBe(404);
  });

  test("It should do update news", async () => {
    const newNews = await createNewsHelper(app);

    const updateRequest = await updateNewsHelper(app, newNews.body._id);

    expect(updateRequest.statusCode).toBe(204);

    const updatedNews = await getNewsByIdHelper(app, newNews.body._id);
    expect(updatedNews.body.conteudo).toBe("conteudo mock update");
  });

  test("It should throw an error on update news", async () => {
    const newNews = await createNewsHelper(app);

    const updateRequest = await updateNewsHelper(app, newNews.body._id, {
      url: "",
    });

    expect(updateRequest.statusCode).toBe(400);
  });
});
