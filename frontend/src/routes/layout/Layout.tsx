import { Outlet } from "react-router-dom";
import { Footer } from "./widgets/Footer";
import { Navigation } from "./widgets/Navigation";

export function Layout() {
  return (
    <div className="flex h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
