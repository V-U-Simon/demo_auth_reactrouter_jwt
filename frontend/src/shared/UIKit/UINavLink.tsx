import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Link, To } from "react-router-dom";

export interface UILinkProps {
  to: To;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

interface UINavLinkProps extends UILinkProps {
  end?: boolean;
}
/**
 * * UINavLink — навигационная ссылка (со статусом)
 *
 * @example
 * ```tsx
 *  <UINavLink to="/">Home</UINavLink>
 * ```
 */

export const UINavLink: React.FC<UINavLinkProps> = ({
  to,
  className = "text-gray-500",
  activeClassName = "text-indigo-600",
  children,
  end = true, // переклчение проверки с точного сопадения c URL или проверки влкючения в пути URL
}) => (
  <NavLink to={to} className={({ isActive }) => `${className} ${isActive ? activeClassName : ""}`} end={end}>
    {children}
  </NavLink>
);

// className="text-base font-medium text-gray-500 hover:text-gray-900"
