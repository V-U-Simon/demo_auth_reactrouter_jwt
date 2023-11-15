import { login, logout } from "./auth";
import { verifyToken, refreshExpiredAccessToken } from "./token";

export const api = {
  // regular
  login,
  logout,

  verifyToken,
  refreshExpiredAccessToken,
};
