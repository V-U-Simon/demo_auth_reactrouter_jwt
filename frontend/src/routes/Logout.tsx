import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLogout, useSession } from "src/hooks/useSession";

export function Logout() {
  const { isAuthenticated } = useSession();
  const { logout } = useLogout();

  useEffect(() => {
    (async () => await logout())();
  }, []);

  return <>{!isAuthenticated() && <Navigate to="/" replace={true} />}</>;
}
