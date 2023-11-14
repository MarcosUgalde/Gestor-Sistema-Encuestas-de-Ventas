const { sql } = require("slonik");

const selectUser = (email) => sql`
    SELECT * FROM users
    WHERE email = ${email}
`;

module.exports = {
  selectUser,
};
