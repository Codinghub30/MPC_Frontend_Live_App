import axios from "axios";

const api = axios.create({
  baseURL: "https://mpc-backend-live-app.onrender.com/api",
  timeout: 5000,
});

// api.interceptors.request.use(
//     config => {

//     }
// )

export default api;
