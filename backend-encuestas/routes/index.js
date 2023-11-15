const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const encuestasRoutes = require("./encuestas");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", usersRoutes(db));
  router.use("/encuestas", encuestasRoutes(db));

  return router;
};
