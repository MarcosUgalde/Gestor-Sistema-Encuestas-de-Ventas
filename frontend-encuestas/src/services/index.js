import axios from "axios";
import { register, logout, signin } from "./auth";
import { info } from "./user";
import {
  deleteEncuesta,
  editEncuesta,
  infoEncuestas,
  infoOneEncuesta,
  insertEncuesta,
} from "./encuestas";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
};

const encuestas = {
  getEncuestas: infoEncuestas(client),
  getOneEncuesta: infoOneEncuesta(client),
  addEncuesta: insertEncuesta(client),
  updateEncuesta: editEncuesta(client),
  eliminateEncuesta: deleteEncuesta(client),
};

export { auth, user, encuestas };
