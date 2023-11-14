import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "src/routes/Layout";
import { Login } from "src/routes/Login";
import { Private } from "src/routes/Private";
import { ProtectedUniversal } from "src/routes/ProtectedRoutes";
import { Publlic } from "src/routes/Public";

// Массив маршрутов
export function DataRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "public",
          element: <Publlic />,
        },
        {
          path: "privateRoute",
          element: <ProtectedUniversal />,
          children: [
            {
              index: true,
              element: <Private />,
            },
          ],
        },
        {
          path: "privateComponent",
          element: (
            <ProtectedUniversal>
              <Private />
            </ProtectedUniversal>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
