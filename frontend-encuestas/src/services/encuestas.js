export const infoEncuestas = (client) => async () => {
  try {
    const { data: response } = await client.get("/encuestas/all");
    console.info("Encuestas info: ", response);
    return response.data;
  } catch (error) {
    console.info("Info encuestas error: ", error.message);
    return null;
  }
};
