import localforage from "localforage";
import { Session } from "./types";

async function setSession(session: Session): Promise<void> {
  await localforage.setItem("authSession", session);
}
async function getSession(): Promise<Session> {
  return (await localforage.getItem("authSession")) as Session;
}
async function removeSession(): Promise<void> {
  localforage.removeItem("authSession");
}

export const storage = {
  getSession,
  setSession,
  removeSession,
};
