import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { apiAuth } from "src/api/auth";

export const Layout = () => {
  async function handleSubmit() {
    console.log("click");

    const credential = {
      email: "admin@admin.ru",
      password: "password",
    };

    const response = await apiAuth.login(credential);
    console.log(response);
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
        Get data
      </button>
      <nav>
        <Link to="/">Root</Link>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Outlet />
    </>
  );
};
