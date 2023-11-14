import axios, { AxiosError, AxiosInstance } from "axios";
import { isExpired } from "react-jwt";
import { storage } from "./storage";

const instance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
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

/**
 * refresh expired access token on without making needless request as it will return 401 response
 */
instance.interceptors.request.use(async (config) => {
  let session = await storage.getSession();

  // @ts-ignore: token.access должен быть точно sting, поскольку его наличие сначала проверяется в первом условии
  if (session?.access && isExpired(token.access)) token = await storage.refreshExpiredAccessToken();
  if (session?.access) config.headers["Authorization"] = "Bearer " + session.access;
  return config;
});

export { instance as client };
