import axios from "axios";
import { Token, accessToken } from "./types";
import { store } from "../store";

export async function verifyToken(token: accessToken): Promise<accessToken> {
  const response = await axios.post("http://127.0.0.1:8000/api/auth/token/verify/", {
    token: token.access,
  });
  return { access: response.data.token };
}

export async function refreshExpiredAccessToken(): Promise<Token> {
  const token = await store.geAuthToken();
  const response = await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", {
    refresh: token.refresh,
  });
  const newToken: Token = response.data;
  await store.setTokens(newToken);
  return newToken;
}
