export const infoEncuestas = (client) => async () => {
  try {
    const { data: response } = await client.get("/encuestas/all");
    console.info("Encuestas info: ", response);
    return response;
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

export const insertEncuesta = (client) => async (params) => {
  try {
    const { data } = await client.post("/encuestas/new", params);
    console.info("Encuesta insertion data: ", data);
    return data;
  } catch (error) {
    console.info("Encuesta insertion error: ", error.message);
    return { success: false };
  }
};
