const { createEncuesta } = require("../../models/encuestas");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const {
    client_dni,
    product,
    subproduct_gas,
    subproduct_light,
    maintenance_gas,
    maintenance_light,
    estado,
  } = req.body;

  const response = await createEncuesta(await db)(
    client_dni,
    product,
    subproduct_gas,
    subproduct_light,
    maintenance_gas,
    maintenance_light,
    estado
  );

  if (!response.ok) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
  });
};
