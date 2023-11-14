import { client } from "./client";
import { LoginParams, Session } from "./types";

async function login({ email, password }: LoginParams): Promise<Session> {
  const response = await client.post("auth/login/", {
    email: email,
    password: password,
  });
  return response.data;
}

export const apiAuth = {
  login,
};
