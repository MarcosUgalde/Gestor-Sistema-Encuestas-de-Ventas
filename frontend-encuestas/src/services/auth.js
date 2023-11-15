export const register = (client) => async (params) => {
  try {
    const { data } = await client.post("/auth/signup", params);
    console.info("Signup data: ", data);
    return data;
  } catch (error) {
    console.info("Signup error: ", error.message);
  }
};

export const signin = (client) => async (params) => {
  try {
    const { data } = await client.post("/auth/signin", params);
    console.info("login data: ", data);
    return data;
  } catch (error) {
    console.info("Login error: ", error.message);
    return { success: false };
  }
};

export const logout = (client) => async () => {
  try {
    const { data } = await client.post("/auth/signout");
    return data;
  } catch (error) {
    console.info("signout error: ", error.message);
    return { success: false };
  }
};
