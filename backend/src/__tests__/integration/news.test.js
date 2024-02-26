const mongoose = require("mongoose");

const { dropDatabase } = require("../../loaders/db");
const getNewsListHelper = require("../../api/helpers/getNewsListHelper");
const createNewsHelper = require("../../api/helpers/createNewsHelper");

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

  test("It should get news list", async () => {
    const newsList = await getNewsListHelper(app);
    expect(newsList.statusCode).toBe(200);

    //TODO: WILL FAIL, CREATE ADD NEWS ROUTE
    expect(newsList.body.length).toBeGreaterThan(0);
  });
});
