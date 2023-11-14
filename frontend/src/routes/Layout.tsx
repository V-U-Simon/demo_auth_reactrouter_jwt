import { Link, Outlet } from "react-router-dom";
import { useSession } from "src/hooks/useSession";
import { Login } from "./Login";

export function Layout() {
  const { session, isAuthenticated } = useSession();

  return (
    <>
      <Login />
      <button onClick={() => logout()} className={`btn ${!isAuthenticated && "border-red-400"}`} disabled={!isAuthenticated}>
        Logout
      </button>

      <h2>Authorization status: {JSON.stringify(session)}</h2>
      <div className="centered-container">
        <ul>
          <li>
            <Link to="/privateRoute">privateRoute</Link>
          </li>
          <li>
            <Link to="/privateComponent">privateComponent</Link>
          </li>
          <li>
            <Link to="/public">public</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
