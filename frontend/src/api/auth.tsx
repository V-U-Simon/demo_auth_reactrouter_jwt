import { client } from "./client";
import { LoginParams } from "./types";

async function login({ email, password }: LoginParams): Promise<any> {
  const response = await client.post("auth/login/", {
    email: email,
    password: password,
  });
  return response;
}

export const apiAuth = {
  login,
};
