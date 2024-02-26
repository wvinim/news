const validUtils = require("../utils/validUtils");
const newsServices = require("../services/newsServices");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  validateNews: async (req, res, next) => {
    // VALIDAÇÃO DE EXEMPLO
    const url = req.body.url;

    if (!validUtils.stringIsAValidUrl(url)) {
      return res.status(400).send({
        message: "Invalid url",
      });
    }

    next();
  },
  validId: async (req, res, next) => {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({
        message: "Invalid news",
      });
    }

    next();
  },
  hasNews: async (req, res, next) => {
    const id = req.params.id;

    const newsData = await newsServices.getNewsById(id);
    if (!newsData) {
      return res.status(404).json({ error: "News not found" });
    }

    next();
  },
};
