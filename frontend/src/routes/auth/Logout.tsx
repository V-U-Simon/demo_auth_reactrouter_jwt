import { redirect } from "react-router-dom";
import { store } from "src/shared/store";
// import { api } from "src/shared/api";

export async function logoutAction() {
  // if after logout add tokens in blacklist
  // const session = await store.getSession();
  // await api.logout(session);
  store.removeSession();
  return redirect("/");
}
