import React from "react";
import { NavItem, Button } from "reactstrap";

const NavLink = ({ children, func }) => {
  return (
    <NavItem className="mr-5">
      <Button color="primary" onClick={func}>
        {children}
      </Button>
    </NavItem>
  );
};

export default NavLink;
