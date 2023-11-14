import localforage from "localforage";
import { Session } from "./types";

async function setSession(session: Session): Promise<void> {
  await localforage.setItem("authSession", session);
}
async function getSession(): Promise<Session> {
  const session = (await localforage.getItem("authSession")) as Session | null;
  if (!session) return {} as Session;
  return session;
}
async function removeSession(): Promise<void> {
  localforage.removeItem("authSession");
}

export const storage = {
  getSession,
  setSession,
  removeSession,
};
