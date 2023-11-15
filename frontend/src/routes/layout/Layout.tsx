import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./widgets/Footer";
import { Navigation } from "./widgets/Navigation";

export function Layout() {
  return (
    <>
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6  md:space-x-10">
            <Navigation />
          </div>
        </div>
      </header>
      <div>
        <br />
        <Outlet />
        <br />
        <Footer />
      </div>
    </>
  );
}
