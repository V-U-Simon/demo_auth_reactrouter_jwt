import { client } from "./client";
import { CurrentUser } from "./types";

// =================== WORK API ======================================

export async function fetchCurrentUser(): Promise<CurrentUser> {
  const response = await client.get("auth/current_user/");
  return response.data;
}

export async function updateCurrentUser(newUserData: CurrentUser): Promise<CurrentUser> {
  const response = await client.put("auth/current_user/", { newUserData });
  return response.data;
}
