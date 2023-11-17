const { editEncuesta } = require("../../models/encuestas");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const {
    client_dni,
    product,
    subproduct_gas,
    subproduct_light,
    maintenance_gas,
    maintenance_light,
    estado,
  } = req.body;
  const encuesta = await editEncuesta(await db)(
    client_dni,
    product,
    subproduct_gas,
    subproduct_light,
    maintenance_gas,
    maintenance_light,
    estado,
    id
  );

  if (!encuesta) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: encuesta.data,
  });
};
