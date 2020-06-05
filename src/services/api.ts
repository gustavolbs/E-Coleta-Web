import axios from "axios";

const api = axios.create({
  // baseURL: "https://e-coleta-api.herokuapp.com/",
  baseURL: "http://192.168.25.8:3333",
});

export default api;
