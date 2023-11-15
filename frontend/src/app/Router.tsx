import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, RouterProviderProps } from "react-router-dom";
import React from "react";
import { Layout, rootLoader } from "src/routes/layout/Layout";

// -------------------------------- AUTH ROUTES --------------------------------
import { Login, loginLoader } from "src/routes/auth/Login";
import { emailAuthAction } from "src/routes/auth/widgets/EmailAuth";

const authRoutes = [
  {
    path: "login",
    Component: Login,
    loader: loginLoader,
    action: emailAuthAction,
  },
  {
    path: "/logout",
    action: logoutAction,
  },
  // {
  //   path: "profile",
  //   loader: protectedWrapperLoader(loaderProfile),
  //   Component: ProfilePage,
  // },
];

// -------------------------------- MAIN ROUTES --------------------------------
import { ErrorBoundary } from "src/routes/errors/ErrorPage404";
import { Home } from "src/routes/Home";
import { Account, Profile, User } from "src/routes/User";
import { logoutAction } from "src/routes/auth/Logout";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader, // with getting of auth data
    Component: Layout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        Component: Home,
      },
      ...authRoutes,
    ],
  },
]);
