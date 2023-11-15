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

export const infoOneEncuesta = (client) => async (id) => {
  try {
    const { data: response } = await client.get(`/encuestas/${id}`);
    console.info("Encuesta info: ", response);
    return response.data;
  } catch (error) {
    console.info("Encuesta info error: ", error.message);
    return null;
  }
};
