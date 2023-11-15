const { sql } = require("slonik");

const insertEncuesta = (
  client_dni,
  product,
  subproduct,
  mantenimiento,
  estado
) => sql.unsafe`
    INSERT INTO encuestas (
        client_dni, product, subproduct, mantenimiento, estado
    ) VALUES (
        ${client_dni}, ${product}, ${subproduct}, ${mantenimiento}, ${estado}
    )
`;

const selectAllEncuestas = () => sql.unsafe`
        SELECT * FROM encuestas
`;

const selectOneEncuesta = (id) => sql.unsafe`
        SELECT * FROM encuestas
        WHERE id = ${id}
`;

module.exports = {
  insertEncuesta,
  selectAllEncuestas,
  selectOneEncuesta,
};
