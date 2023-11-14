import { Link, Outlet } from "react-router-dom";
import { apiAuth } from "src/api/auth";
import { SessionContext } from "src/providers/sessionProvider";
import { useContext } from "react";

export const Layout = () => {
  const { session, login, logout } = useContext(SessionContext);

  async function handleSubmit() {
    console.log("click");

    await login({
      email: "admin@admin.ru",
      password: "password",
    });

    // const response = await apiAuth.login();

    // console.log(response);
  }

  return (
    <>
      <h1>React Router</h1>

      <h2 className="text-3xl font-bold underline text-rose-800 m-3">TailWind is working</h2>

      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        login
      </button>
      <button
        onClick={async () => {
          await logout();
        }}
      >
        logout
      </button>
      <h2>{JSON.stringify(session)}</h2>
      <nav>
        <Link to="/">Root</Link>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Outlet />
    </>
  );
};
