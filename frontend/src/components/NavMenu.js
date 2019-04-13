import React from "react";
import { Nav } from "reactstrap";
const NavMenu = ({ children }) => {
  return <Nav navbar>{children}</Nav>;
};

export default NavMenu;
