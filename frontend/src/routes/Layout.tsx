import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useSession } from "src/hooks/useSession";

export const Layout = () => {
  const { isAuthenticated } = useSession();
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!isAuthenticated() && <Link to="/login">Login</Link>}
        {isAuthenticated() && <Link to="/logout">Logout</Link>}
        <Link to="/user">User</Link>
      </nav>
      <main className="flex flex-1 justify-center">
        <h1>React Router</h1>
        <Outlet />
      </main>
    </>
  );
};
