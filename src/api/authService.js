import api from "./config";

const authService = {
  // signup: (body) => {
  //   api.post("/auth/signup", body).then((res) => res.data);
  // },
  createBooking: (body) => {
    api.post("/book/createBook", body).then((res) => res.data);
  },
};

export default authService;
