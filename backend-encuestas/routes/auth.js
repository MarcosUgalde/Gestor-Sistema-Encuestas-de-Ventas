const router = require("express").Router();
const { authorizer, fieldsValidator } = require("../middlewares");

const authControllers = require("../controllers/auth");

const signinValidator = fieldsValidator("email", "password");

module.exports = (db) => {
  router.post("/signup", authControllers.signup(db));
  router.post("/signin", signinValidator, authControllers.signin(db));
  router.post("/signout", authorizer(), authControllers.signout());

  router;
};
