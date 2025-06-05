import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/api",
  timeout: 5000,
});

// api.interceptors.request.use(
//     config => {

//     }
// )

export default api;
