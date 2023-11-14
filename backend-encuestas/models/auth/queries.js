const { sql } = require("slonik");

const insertUser = (username, email, password, edit_access) => sql.unsafe`
    INSERT INTO users (
        email, username, password, edit_access
    ) VALUES (
        ${username}, ${email}, ${password}, ${edit_access}
    )
`;

const selectUser = (email) => sql`
    SELECT * FROM users
    WHERE email = ${email}
`;

module.exports = {
  insertUser,
  selectUser,
};
