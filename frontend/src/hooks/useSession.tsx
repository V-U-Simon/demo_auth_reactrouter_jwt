import { SessionContext, SessionContextType } from "src/providers/sessionProvider";
import { useContext } from "react";
import { storage } from "src/api/storage";

export function useSession() {
  const { session } = useContext(SessionContext) as SessionContextType;
  const isAuthenticated = () => Boolean(session?.access);
  return { session, isAuthenticated };
}

export function useLogin() {
  const { login, errors, setErrors } = useContext(SessionContext) as SessionContextType;
  return { login, errors, setErrors };
}

export function useLogout() {
  const { logout } = useContext(SessionContext) as SessionContextType;
  return { logout };
}
