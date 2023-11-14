import { SessionContext, SessionContextType } from "src/providers/sessionProvider";
import { useContext } from "react";

export function useSession() {
  const { session, login, logout } = useContext(SessionContext);
  const isAtuhented = () => Boolean(session?.access);
  return { session, isAtuhented, login, logout };
}
