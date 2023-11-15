import localforage from "localforage";
import { Session } from "../api/types";

// =================== WORK WITH LOCALSTORAGE ======================================

export async function setSession(session: Session): Promise<void> {
  await localforage.setItem("session", session);
}

export async function removeSession(): Promise<void> {
  await localforage.removeItem("session");
}

export async function getSession(): Promise<Session> {
  return (await localforage.getItem("session")) as Session;
}
