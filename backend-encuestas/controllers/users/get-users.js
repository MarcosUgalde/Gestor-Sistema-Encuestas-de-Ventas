const { selecAllUsers } = require("../../models/users");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const users = await selecAllUsers(await db)();

  if (!users.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: users.content,
  });
};
