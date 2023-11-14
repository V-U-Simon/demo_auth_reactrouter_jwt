import { SessionContext, SessionContextType } from "src/providers/sessionProvider";
import { useContext } from "react";

export function useSession() {
  const { session, login, logout, error, setError } = useContext(SessionContext) as SessionContextType;
  const isAtuhented = () => Boolean(session?.access);
  return { session, isAtuhented, login, logout, error, setError };
}
