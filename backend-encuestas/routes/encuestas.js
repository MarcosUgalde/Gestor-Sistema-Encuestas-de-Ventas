const router = require("express").Router();
const { authorizer } = require("../middlewares");

const encuestasControllers = require("../controllers/encuestas");

module.exports = (db) => {
  router.get("/all", authorizer(), encuestasControllers.getEncuestas(db));
  router.post("/new", authorizer(), encuestasControllers.addEncuesta(db));

  return router;
};
