import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>React Router</h1>

      <h2 className="text-3xl font-bold underline text-rose-800 m-3">TailWind is working</h2>

      <nav>
        <Link to="/">Root</Link>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Outlet />
    </>
  );
};
