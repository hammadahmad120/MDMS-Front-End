import axios from "axios";
import { getUserToken, userLogout } from "../services/authServices";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

//Axios.defaults.headers["content-type"] = "application/x-www-form-urlencoded";
//Axios.defaults.headers["accept"] = "application/json";

export const AuthAxios = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

AuthAxios.defaults.headers["content-type"] = "application/json";
AuthAxios.defaults.headers["accept"] = "application/json";
AuthAxios.defaults.headers["x-access-token"] = `${getUserToken()}`;

AuthAxios.interceptors.request.use((req) => {
  // if user is logged in from some other tab with some other account then token will be different and we reload to update token in current tab as well
  if (req.headers["x-access-token"] !== `${getUserToken()}`) {
    window.location.replace("/home");
  } else {
    return req;
  }
});

AuthAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      userLogout("/login");
    }

    return Promise.reject(error);
  }
);

export default Axios;
