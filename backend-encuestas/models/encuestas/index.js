const {
  insertEncuesta,
  selectAllEncuestas,
  selectOneEncuesta,
  updateEncuesta,
  deleteEncuesta,
} = require("./queries");

const createEncuesta =
  (db) =>
  async (
    client_dni,
    product,
    subproduct_gas = null,
    subproduct_light = null,
    maintenance_gas = null,
    maintenance_light = null,
    estado
  ) => {
    try {
      await db.query(
        insertEncuesta(
          client_dni,
          product,
          subproduct_gas,
          subproduct_light,
          maintenance_gas,
          maintenance_light,
          estado
        )
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

const getOneEncuesta = (db) => async (id) => {
  try {
    const encuesta = await db.query(selectOneEncuesta(id));

    return {
      ok: true,
      data: encuesta.rows,
    };
  } catch (error) {
    console.info("> Select encuesta error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const editEncuesta =
  (db) =>
  async (
    client_dni,
    product,
    subproduct_gas = null,
    subproduct_light = null,
    maintenance_gas = null,
    maintenance_light = null,
    estado,
    id
  ) => {
    try {
      const response = await db.query(
        updateEncuesta(
          client_dni,
          product,
          subproduct_gas,
          subproduct_light,
          maintenance_gas,
          maintenance_light,
          estado,
          id
        )
      );

      return {
        ok: true,
        data: response.rows,
      };
    } catch (error) {
      console.info("> Update encuesta rows error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const eliminateEncuesta = (db) => async (id) => {
  try {
    await db.query(deleteEncuesta(id));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("> Encuesta elimination error: ", error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createEncuesta,
  getAllEncuestas,
  getOneEncuesta,
  editEncuesta,
  eliminateEncuesta,
};
