import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";
import "./Nav.scss";
export default function Nav({ className, children, style }) {
  return (
    <nav className={cn("", className)} style={style}>
      {children}
    </nav>
  );
}
Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
