const { getOneEncuesta } = require("../../models/encuestas");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const response = await getOneEncuesta(await db)(id);

  if (!response.ok) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
    content: response.data,
  });
};
