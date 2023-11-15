import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Footer } from "./widgets/Footer";
import { Navigation } from "./widgets/Navigation";
import { Session } from "src/shared/api/types";
import { store } from "src/shared/store";
import { AuthNavigation } from "./widgets/AuthNavigation";

/**
 * Позволяет получать данные из useRouteLoaderData("root") в любом компоненте.
 *
 * * ПРИМЕР:
 *   const user = useRouteLoaderData("root") as CurrentUserType | null;
 */
export async function rootLoader(): Promise<Session | null> {
  const session = await store.getSession();
  console.debug("RootLoader (AuthProvider.authCheck):", session?.access);
  console.dir(session);
  return session || null;
}

export function Layout() {
  const session = useLoaderData();
  return (
    <>
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6  md:space-x-10">
            <Navigation />
            <AuthNavigation />
          </div>
        </div>
      </header>
      <div>
        <br />
        <Outlet />

        <br />
        <h2>session: {JSON.stringify(session)}</h2>
        <Footer />
      </div>
    </>
  );
}
