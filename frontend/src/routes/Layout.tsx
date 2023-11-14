import { Link, Outlet } from "react-router-dom";
import { LoginParams } from "src/api/types";
import { useLogin, useLogout, useSession } from "src/hooks/useSession";

export const Layout = () => {
  const { session, isAtuhented } = useSession();
  const { login, error, setError } = useLogin();
  const { logout } = useLogout();

  async function handleSubmit() {
    console.log("click");

    const credential = {
      email: "admin@admin.ru",
      password: "password1",
    } as LoginParams;

    await login(credential);
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
          setError("reset");
        }}
      >
        logout
      </button>
      <h2>{JSON.stringify(session)}</h2>
      <h2>{JSON.stringify(error)}</h2>
      <nav>
        <Link to="/">Root</Link>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Outlet />
    </>
  );
};
