import axios from "axios";
import { AppConfig } from "../configs/app.config";

// axios instance for making requests
const instance = axios.create({
  baseURL: AppConfig.apiBaseURL,
});

instance.interceptors.request.use(
  (config) => {
    if (config?.headers) {
      const tokens = localStorage.getItem('authTokens');
      if (tokens) {
        config.headers["Authorization"] = "Bearer " + JSON.parse(tokens)?.id_token;
        config.headers["Content-type"] = "application/json";
        config.headers["Access-Control-Allow-Origin"] = "*";
        config.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
      }
    }
    return config;
  },
  (error) => {
    console.log('error: ', error);
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // block to handle success case
    return response;
  },
  function (error) {
    // block to handle error case
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://dummydomain.com/auth/token"
    ) {
      // Added this condition to avoid infinite loop

      // Redirect to any unauthorised route to avoid infinite loop...
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      // Code inside this block will refresh the auth token

      originalRequest._retry = true;
      const refreshToken = "xxxxxxxxxx"; // Write the  logic  or call here the function which is having the login to refresh the token.
      return axios
        .post("/auth/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem("authTokens", res.data);
            const tokens = localStorage.getItem('authTokens');
            if (tokens) {
              axios.defaults.headers.common["Authorization"] =  "Bearer " + JSON.parse(tokens)?.id_token;
            }
            return axios(originalRequest);
          }
        });
    }
    
    return Promise.reject(error);
  }
);

export default instance;