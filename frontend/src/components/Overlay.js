import React from "react";
import { OverlayStyled } from "../assets/styles/HomeStyledComponents";
const Overlay = ({ children }) => {
  return <OverlayStyled>{children}</OverlayStyled>;
};

export default Overlay;
