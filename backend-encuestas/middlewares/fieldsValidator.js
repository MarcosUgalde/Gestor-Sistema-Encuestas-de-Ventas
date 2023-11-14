const errors = require("../misc/errors");

module.exports =
  (...fields) =>
  (req, _, next) => {
    for (let field of fields) {
      if (!req.body[field]) return next(errors[400]);
    }
    const { password } = req.body;

    if (password && password.length < 8) return next(errors["pass_length"]);

    return next();
  };
