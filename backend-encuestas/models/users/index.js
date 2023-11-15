const { selectUsers } = require("./queries");

const selecAllUsers = (db) => async () => {
  try {
    const users = await db.query(selectUsers());
    return {
      ok: true,
      content: users,
    };
  } catch (error) {
    console.info("Select all users error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  selecAllUsers,
};
