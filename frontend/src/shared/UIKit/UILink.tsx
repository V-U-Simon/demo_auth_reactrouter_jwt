import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";

export interface UILinkProps {
  to: To;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

/**
 * * UILink — обычная ссылка
 *
 * ПРИМЕР:
 * <UILink to="/page">Some page.</UILink>
 */
export const UILink: React.FC<UILinkProps> = ({ to, className = "text-base font-medium text-gray-500 hover:text-gray-900", children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);
