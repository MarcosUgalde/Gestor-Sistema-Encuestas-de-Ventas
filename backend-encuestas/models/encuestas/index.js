const { insertEncuesta } = require("./queries");

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

module.exports = {
  createEncuesta,
};
