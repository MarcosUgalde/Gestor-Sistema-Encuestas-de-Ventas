const { sql } = require("slonik");

const insertEncuesta = (
  client_dni,
  product,
  subproduct_gas,
  subproduct_light,
  maintenance_gas,
  maintenance_light,
  estado
) => sql.unsafe`
    INSERT INTO encuestas (
        client_dni, product, subproduct_gas, subproduct_light, maintenance_gas, maintenance_light, estado
    ) VALUES (
        ${client_dni}, ${product}, ${subproduct_gas}, ${subproduct_light}, ${maintenance_gas}, ${maintenance_light}, ${estado}
    )
`;

const selectAllEncuestas = () => sql.unsafe`
        SELECT * FROM encuestas
`;

const selectOneEncuesta = (id) => sql.unsafe`
        SELECT * FROM encuestas
        WHERE id = ${id}
`;

const updateEncuesta = (
  client_dni,
  product,
  subproduct_gas,
  subproduct_light,
  maintenance_gas,
  maintenance_light,
  estado,
  id
) => sql.unsafe`
        UPDATE encuestas
        SET client_dni = ${client_dni},
        product = ${product},
        subproduct_gas = ${subproduct_gas},
        subproduct_light = ${subproduct_light},
        maintenance_gas = ${maintenance_gas},
        maintenance_light = ${maintenance_light},
        estado = ${estado}
        WHERE id = ${id}
`;

const deleteEncuesta = (id) => sql.unsafe`
    DELETE FROM encuestas
    WHERE id = ${id}
`;

module.exports = {
  insertEncuesta,
  selectAllEncuestas,
  selectOneEncuesta,
  updateEncuesta,
  deleteEncuesta,
};
