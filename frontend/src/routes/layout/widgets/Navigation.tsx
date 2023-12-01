// import { UINavLink } from "src/shared/UIkit/UINavLink";
import { MenuDropDown, MenuHorizontal } from "./Menu";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <div className="navbar bg-base-100">
        {/* start */}
        <MenuDropDown />
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        {/* center */}
        <div className="navbar-center hidden lg:flex">
          <MenuHorizontal />
        </div>
        {/* end */}
        <div className="navbar-end">
          <Link
            className="btn"
            to="login/"
          >
            login
          </Link>
        </div>
      </div>
    </nav>
  );
}
