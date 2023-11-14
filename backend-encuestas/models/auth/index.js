const { selectUser } = require("./queries");

const getUser = (db) => async (email, compareFn) => {
  try {
    const user = await db.maybeOne(selectUser(email));

    if (!user)
      return {
        ok: false,
        error_code: "wrong_data",
      };

    const areEqual = await compareFn(user.password);

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
  selectUser,
};
