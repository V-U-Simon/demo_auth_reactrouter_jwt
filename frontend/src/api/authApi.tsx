import { LoginParams, Session, Token } from "./types";
import { client } from "./client";

async function login({ email, password }: LoginParams): Promise<any> {
  console.dir(email);
  console.dir(password);

  const response = await client.post("auth/login", {
    email: email,
    password: password,
  });
  console.dir(response);
}

export const authApi = {
  login,
};
