import { client } from "./client";
import { LoginParams, LogoutResponse, Session, Token } from "./types";

/**
 * заполняем форму авторизации и отправляем на этот эндпоин
 *
 */
export async function login({ email, password }: LoginParams): Promise<Session> {
  const response = await client.post("auth/login/", {
    email: email,
    password: password,
  });
  return response.data;
}

/**
 *
 * @param param0
 * @returns { "detail": "Neither cookies or blacklist are enabled, so the token has not been deleted server side. Please make sure the token is deleted client side." }
 */
export async function logout(token: Token): Promise<LogoutResponse> {
  const response = await client.post("auth/logout/", {
    token: token.access,
  });

  return response.data;
}
