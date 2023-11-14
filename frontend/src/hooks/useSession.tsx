import { useContext } from "react";
import { AuthContext } from "./authProvider";

export function useSession() {
  const { session } = useContext(AuthContext);
  const isAuthenticated = Boolean(session?.access);
  return { session, isAuthenticated };
}

export function useLogin() {
  const { login, loading, error, setError } = useContext(AuthContext);
  return { login, loading, error, setError };
}

export function useLogout() {
  const { logout, loading } = useContext(AuthContext);
  return { logout, loading };
}
