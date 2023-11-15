import React from "react";

import { UINavLink } from "src/shared/UIkit/UINavLink";

export function Navigation() {
  return (
    <nav>
      <ul className="flex flex-wrap items-center text-sm justify-center space-x-4">
        <li>
          <UINavLink to="/">Home</UINavLink>
        </li>
        <li>
          <UINavLink to="/about">About</UINavLink>
        </li>
        <li>
          <UINavLink to="/contacts">Contacts</UINavLink>
        </li>
      </ul>
    </nav>
  );
}

// export function Navigation() {
//   return (
//     <nav>
//       <ul className="flex flex-wrap items-center text-sm justify-center space-x-4">
//         <li>
//           <NavLink to="/about" className="hover:underline">
//             About Us
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/services" className="hover:underline">
//             Services
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/blog" className="hover:underline">
//             Blog
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="hover:underline">
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
