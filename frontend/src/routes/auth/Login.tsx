import React from "react";

import { redirect } from "react-router-dom";
import { EmailAuth } from "./widgets/EmailAuth";
import { store } from "src/shared/store";

export async function loginLoader() {
  const session = await store.getSession();
  if (session?.access) {
    return redirect("/");
  }
  return null;
}

export function Login() {
  return (
    <div>
      <div className="animate_top bb af i va sg hh sm vk xm yi _n jp hi ao kp">
        <span className="rc h r s zd/2 od zg gh"></span>
        <span className="rc h r q zd/2 od xg mh"></span>
        <div className="rj">
          <h2 className="ek ck kk wm xb">Sign in to your Account</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <>
            <h3 className="hk yj kk wm ob mc">Sign in with Social Media</h3>
            <span className="i rc sj hk xj">
              <span className="rc h s z/2 nd oe rh tm"></span>
              <span className="rc h q z/2 nd oe rh tm"></span>
              Or, sign in with your email
            </span>
            <EmailAuth />
          </>
        </div>
      </div>
    </div>
  );
}
