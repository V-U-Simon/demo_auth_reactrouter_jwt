import axios, { AxiosError, AxiosInstance } from "axios";
import { isExpired } from "react-jwt";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * just logging requests
 */
instance.interceptors.request.use(async (config) => {
  console.debug(`interceptor.request: ${config.url} (MAKE REQUEST)`, config);

  return config;
});

/**
 * just logging responses
 */
instance.interceptors.response.use(
  (response) => {
    console.debug(`interceptor.response: ${response.config.url} (SUCCESS)`);
    return response;
  },
  (error: AxiosError) => {
    console.error(`interceptor.response ${error.config?.url} (ERROR ${error.status}):`, error);
    return error.response?.data;
  }
);

export { instance as client };
