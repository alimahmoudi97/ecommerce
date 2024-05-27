const { default: axios } = require("axios");

const app = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  patch: app.patch,
  delete: app.delete,
  put: app.put,
};

export default http;
