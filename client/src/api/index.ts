import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
});

api.defaults.headers.common["Token"] = localStorage.getItem("token");

export default api;
