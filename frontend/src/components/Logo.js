import React from "react";
import { NavbarBrand } from "reactstrap";

const Logo = ({ name }) => {
  return (
    <NavbarBrand href="/profile" className="mr-auto">
      {name}
    </NavbarBrand>
  );
};

export default Logo;
