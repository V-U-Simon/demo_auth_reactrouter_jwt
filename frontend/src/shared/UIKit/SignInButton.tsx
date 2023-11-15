import React from "react";

export function SignInButton({ isLoggingIn }) {
  return (
    <button type="submit" disabled={isLoggingIn} className="vd rj ek rc rg gh lk ml il _l gi hi">
      {isLoggingIn ? "Logging in..." : "Sign In"}
    </button>
  );
}
