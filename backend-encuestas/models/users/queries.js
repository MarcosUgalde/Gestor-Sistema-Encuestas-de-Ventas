const { sql } = require("slonik");

const selectUsers = () => sql.unsafe`
SELECT * FROM users
`;

module.exports = { selectUsers };
