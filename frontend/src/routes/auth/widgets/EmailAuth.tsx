import React from "react";

import { Link, Form, LoaderFunctionArgs, redirect, useActionData, useLocation, useNavigation } from "react-router-dom";

import { SignInButton } from "src/shared/UIKit/SignInButton";
import { FormField } from "src/shared/UIKit/FormField";

import { LoginParams, Token } from "src/shared/api/types";
import { store } from "src/shared/store";
import { api } from "src/shared/api";

export async function emailAuthAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  // @ts-ignore
  const data = Object.fromEntries(formData) as LoginParams;

  // Validate our form inputs and return validation errors via useActionData()
  if (!data.email) return { error: "You must provide a email to log in" };

  // Sign in and redirect to the proper destination if successful.
  try {
    console.debug("EmailAuth -> login");
    const session = await api.login(data);
    await store.setSession(session);
  } catch {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: "Invalid login attempt",
    };
  }

  const redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/");
}

export function EmailAuth() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("username") != undefined;

  const actionData = useActionData() as { error: string } | undefined;

  return (
    <Form className="sb" method="post" replace>
      <input type="hidden" name="redirectTo" value={from} />
      <FormField label="Email" type="email" name="email" placeholder="example@gmail.com" />
      <FormField label="Password" type="password" name="password" placeholder="**************" />
      <SignInButton isLoggingIn={isLoggingIn} />
      {actionData && actionData.error ? <p style={{ color: "red" }}>{actionData.error}</p> : null}
      <p className="sj hk xj rj ob">
        Don't have an account?
        <Link to="/registration" className="mk">
          {" Registration"}
        </Link>
      </p>
    </Form>
  );
}
