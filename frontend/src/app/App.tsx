import { SessionProvider } from "src/providers/sessionProvider";
import "./App.css";
import "./index.css";
import "./input.css";
import { DataRoutes } from "./Router";

export function App() {
  return (
    <>
      <SessionProvider>
        <DataRoutes />
      </SessionProvider>
    </>
  );
}
