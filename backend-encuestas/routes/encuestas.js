const router = require("express").Router();
const { authorizer } = require("../middlewares");

const encuestasControllers = require("../controllers/encuestas");

module.exports = (db) => {
  router.post("/new", authorizer(), encuestasControllers.addEncuesta(db));
  router.get("/all", authorizer(), encuestasControllers.getEncuestas(db));
  router.get("/:id", authorizer(), encuestasControllers.getOneEncuesta(db));
  router.put("/:id", authorizer(), encuestasControllers.editEncuesta(db));

  return router;
};
