// import { DataRoutes } from "src/routes/dataRoutes";
// import "./App.css";
// import "./index.css";
import "./style.css";
import "./input.css";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

// export function App() {
//   return <DataRoutes />;
// }

export function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}
