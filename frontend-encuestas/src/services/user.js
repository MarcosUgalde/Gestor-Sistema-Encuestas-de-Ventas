export const info = (client) => async () => {
  try {
    const { data: response } = await client.get("/user");
    console.info("User info data: ", response);
    return response.data;
  } catch (error) {
    console.info("User info error: ", error.message);
    return null;
  }
};
