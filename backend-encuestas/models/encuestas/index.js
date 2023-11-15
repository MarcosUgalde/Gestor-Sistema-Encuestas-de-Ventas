const { insertEncuesta, selectAllEncuestas } = require("./queries");

const createEncuesta =
  (db) => async (client_dni, product, subproduct, mantenimiento, estado) => {
    try {
      await db.query(
        insertEncuesta(client_dni, product, subproduct, mantenimiento, estado)
      );
      return {
        ok: true,
      };
    } catch (error) {
      console.info("> Create encuesta error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const getAllEncuestas = (db) => async () => {
  try {
    const encuestas = await db.query(selectAllEncuestas());

    return {
      ok: true,
      data: encuestas.rows,
    };
  } catch (error) {
    console.info("> Select encuesta error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createEncuesta,
  getAllEncuestas,
};
