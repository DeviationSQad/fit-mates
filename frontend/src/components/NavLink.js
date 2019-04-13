import React from "react";
import { NavItem } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
const NavLink = ({ name, children }) => {
  return (
    <NavItem>
      <Link to="/profile/:name">{name}</Link>
    </NavItem>
  );
};

export default NavLink;
