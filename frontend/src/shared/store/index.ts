import { setTokens, removeTokens, geAuthToken } from "../store/tokenStorage";
import { getSession, setSession, removeSession } from "./sessionStorage";

export const store = {
  // tokens
  setTokens,
  removeTokens,
  geAuthToken,
  // session
  getSession,
  setSession,
  removeSession,
};
