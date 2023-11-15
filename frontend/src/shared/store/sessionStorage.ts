import { CurrentUser } from "../api/types";
import localforage from "localforage";

// =================== WORK WITH LOCALSTORAGE ======================================

export async function setSession(user: CurrentUser): Promise<void> {
  await localforage.setItem("session", user);
}

export async function removeSession(): Promise<void> {
  await localforage.removeItem("session");
}

export async function getSession(): Promise<CurrentUser> {
  return (await localforage.getItem("session")) as CurrentUser;
}
