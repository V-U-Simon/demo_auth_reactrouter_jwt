// import axios from "axios";
// import { Session, Token, accessToken } from "./types";
// import { store } from "../store";

// export async function verifyToken(token: accessToken): Promise<accessToken> {
//   const response = await axios.post("http://127.0.0.1:8000/api/auth/token/verify/", {
//     token: token.access,
//   });
//   return { access: response.data.token };
// }

// export async function refreshExpiredAccessToken(refreshToken: refreshToke): Promise<Token> {
//   const session = await store.getSession();
//   const response = await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", {
//     refresh: session.refresh,
//   });
//   return response.data;
// }

import axios from "axios";
import { Token, AccessToken, Session } from "./types";

export async function verifyToken(token: string): Promise<AccessToken> {
  const response = await axios.post("http://127.0.0.1:8000/api/auth/token/verify/", {
    token: token,
  });
  return { access: response.data.token };
}

export async function refreshExpiredAccessToken(session: Session): Promise<Token> {
  const response = await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", {
    refresh: session.refresh,
  });
  return response.data;
}
