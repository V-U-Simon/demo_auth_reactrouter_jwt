import React from "react";
// import { Link } from "react-router-dom";
import { useFetcher, useRouteLoaderData } from "react-router-dom";
import { UIFetcherButton } from "src/shared/UIKit/Buttons";
import { UILink } from "src/shared/UIKit/UILink";
import { Session } from "src/shared/api/types";

export function AuthNavigation() {
  // Get our logged in user, if they exist, from the root route loader data
  const session = useRouteLoaderData("root") as Session;
  const fetcher = useFetcher();

  const isLoggingOut = fetcher.formData != undefined;

  // Если пользователь авторизирован
  if (session?.access)
    return (
      <div className="flex items-center">
        <UILink to="/profile">Profile</UILink>
        <fetcher.Form method="post" action="/logout">
          <UIFetcherButton
            isLoading={isLoggingOut}
            message="Logout"
            loadingMessage="Logging out..."
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          />
        </fetcher.Form>
      </div>
    );

  // Если пользователь НЕ авторизирован
  if (!session)
    return (
      <div className="flex items-center">
        <UILink to="/login">Login</UILink>
        <UILink
          to="/registration"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Registration
        </UILink>
      </div>
    );
}
