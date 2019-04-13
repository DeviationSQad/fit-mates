import React from "react";
import { Navbar as Nav } from "reactstrap";
const Navbar = ({ children }) => {
  return (
    <>
      <Nav color="faded" light>
        {children}
      </Nav>
    </>
  );
};

export default Navbar;
