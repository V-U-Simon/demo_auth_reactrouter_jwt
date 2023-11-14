import { SessionContext, SessionContextType } from "src/providers/sessionProvider";
import { useContext } from "react";

export function useSession() {
  const { session } = useContext(SessionContext) as SessionContextType;
  const isAtuhented = () => Boolean(session?.access);
  return { session, isAtuhented };
}

export function useLogin() {
  const { login, error, setError } = useContext(SessionContext) as SessionContextType;
  return { login, error, setError };
}

export function useLogout() {
  const { logout } = useContext(SessionContext) as SessionContextType;
  return { logout };
}
