const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { setUpDatabase } = require("./loaders/db");

const { API_PORT } = require("./config");

const app = express();
const routes = require("./api/routes");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

var listener = app.listen(API_PORT, function () {
  console.log("News API on port " + listener.address().port);
});

setUpDatabase();

module.exports = listener;
