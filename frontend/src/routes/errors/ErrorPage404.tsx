import React from "react";
import { Navigate, isRouteErrorResponse, useRouteError } from "react-router-dom";

export interface ErrorType {
  status: number;
  message: string;
}

export function ErrorBoundary() {
  const error = useRouteError() as ErrorType;
  console.debug("ErrorBoundary:", error);

  // for exceptions is accured in loader or action
  if (isRouteErrorResponse(error)) null;

  // for exceptions is accured api
  if (error.status === 401) {
    return <Navigate to="/login" replace={true} />;
  }

  // for common exceptions
  return (
    <div>
      Oops, something went wrong!
      <h1>Oops!</h1>
      <p>{error.message}</p>
      <p>Sorry, an unexpected error has occurred: {error.status}</p>
      <p></p>
    </div>
  );
}
