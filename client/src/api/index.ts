import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

api.defaults.headers.common["Token"] = localStorage.getItem("token");

export default api;
