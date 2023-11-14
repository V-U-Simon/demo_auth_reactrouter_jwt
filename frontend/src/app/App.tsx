import { DataRoutes } from "src/app/router";
import { AuthProvider } from "src/hooks/authProvider";

export function App() {
  return (
    <AuthProvider>
      <DataRoutes />
    </AuthProvider>
  );
}
