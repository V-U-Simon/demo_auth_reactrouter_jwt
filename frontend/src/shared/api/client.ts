import axios, { AxiosError, AxiosInstance } from "axios";
import { isExpired } from "react-jwt";
import { store } from "../store";
import { api } from ".";
import { RefreshToken } from "./types";

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
    console.dir(response);
    return response;
  },
  (error: AxiosError) => {
    console.error(`interceptor.response ${error.config?.url} (ERROR ${error.status}):`, error);
    return error.response?.data;
    // return error.response.data;
  }
);

/**
 * refresh expired access token on without making needless request as it will return 401 response
 */
instance.interceptors.request.use(async (config) => {
  let session = await store.getSession();
  // update session access token
  // @ts-ignore: .access должен быть точно sting, поскольку его наличие сначала проверяется в первом условии
  if (session && isExpired(session.access)) {
    const token = await api.refreshExpiredAccessToken(session);
    store.setSession({ ...session, ...token });
  }
  if (session && session.access) config.headers["Authorization"] = "Bearer " + session.access;
  return config;
});

/**
 * refresh expired access token on 401 response
 * check if token is expired better before sending request
 */
// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // Orginal request for updating the access token
//     const originRequestConfig = error.config;

//     // Access Token was expired
//     if (
//       error.response.status === 401 &&
//       originRequestConfig.url !== "/auth/login" &&
//       // check that not-repated request
//       !originRequestConfig._retry
//     ) {
//       console.warn("interceptor.response: access token is expired", error.response);
//       originRequestConfig._retry = true;

//       const newAccessToken = await auth.refreshExpiredAccessToken();

//       originRequestConfig.headers["Authorization"] = "Bearer " + newAccessToken;
//       console.debug("interceptor.response (REAPETED REQUEST with new token):", originRequestConfig);
//       return instance(originRequestConfig);
//     }

//     throw error.response;
//   }
// );

export { instance as client };
