import localforage from "localforage";
import { Token, accessToken, refreshToken } from "../api/types";

export async function setTokens(token: Token): Promise<void> {
  if (token?.refresh) await localforage.setItem("refreshToken", token.refresh);
  if (token?.access) await localforage.setItem("accessToken", token.access);
  await localforage.setItem("isAuthenticated", true); // todo: проверка аунтификации пользователя должна быть функцией в другом модуле
}

export async function removeTokens(): Promise<void> {
  await localforage.removeItem("refreshToken");
  await localforage.removeItem("accessToken");
  await localforage.removeItem("isAuthenticated"); // todo: проверка аунтификации пользователя должна быть функцией в другом модуле
}

export async function geAuthToken(): Promise<Token> {
  const token = {
    access: (await localforage.getItem("accessToken")) as accessToken,
    refresh: (await localforage.getItem("refreshToken")) as refreshToken,
  };
  return token;
}
