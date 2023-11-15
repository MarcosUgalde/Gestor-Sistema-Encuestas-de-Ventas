const { insertUser, selectUser } = require("./queries");

const createUser = (db) => async (email, username, password, edit_access) => {
  try {
    await db.query(insertUser(email, username, password, edit_access));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("> Create user error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getUser = (db) => async (email, compareFn) => {
  try {
    const user = await db.maybeOne(selectUser(email));
    console.log(user);

    if (!user)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    const areEqual = await compareFn(user.password);

    console.log(areEqual);
    if (!areEqual)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    return {
      ok: true,
      content: {
        email: user.email,
        username: user.username,
        id: user.id,
        access: user.edit_access,
      },
    };
  } catch (error) {
    console.info("Select user error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createUser,
  getUser,
};
