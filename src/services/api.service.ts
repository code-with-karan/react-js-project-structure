import http from "./http-common";
import { AppConfig } from "../configs/app.config";

class ApiService {
  getUsers() {
    return http.get(`${AppConfig.apiBaseURL}/users`);
  }
}

export default new ApiService();