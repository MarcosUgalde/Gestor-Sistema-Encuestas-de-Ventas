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

module.exports = {
  insertEncuesta,
};
