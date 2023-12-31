import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  RouterProviderProps,
} from "react-router-dom";
import React from "react";
import { Home } from "src/routes/Home";
import { Layout } from "src/routes/layout/Layout";
import { Account, Profile, User } from "src/routes/User";
import { Login } from "src/routes/auth/Login";

export const DataRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path=""
          element={<Home />}
        />
        <Route
          path="login/"
          element={<Login />}
        />
        <Route
          path="private/"
          element={<User />}
        >
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="account"
            element={<Account />}
          />
        </Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
