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

// import decodeToken from "react-jwt";
// import { UserType } from "./types";

// async function getUserId() {
//   return user_id;
// }

// export type UserType = {
//   id: number | undefined;
//   username: string;
//   email: string;
//   isActive: boolean;
//   created: string;
//   updated: string;
// };

// export async function currentUser() {

//   // get currnet userId
//   const { access }: { access } = await TokenService.geAuthToken();
//   if (!access) return undefined;

//   console.warn("decode access token:");
//   // decodeToken(access)?.user_id;
//   const userId = 1;
//   console.debug("currentUser:", userId);

//   // Fetch user data
//   const response = await client.get(`users/${userId}/`);
//   return response.data as UserType;
// }
