const validUtils = require("../utils/validUtils");

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
};
