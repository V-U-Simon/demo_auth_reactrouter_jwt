import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, RouterProviderProps } from "react-router-dom";
import React from "react";
import { Home } from "src/routes/Home";
import { Layout } from "src/routes/Layout";
import { Account, Profile, User } from "src/routes/User";
import { Login } from "src/routes/Login";
import { Logout } from "src/routes/Logout";

export const DataRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
