import React from "react";
import { SignUpBtnStyled } from "../assets/styles/home/SignUpBtnStyled";
import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg";
const SignUpBtn = () => {
  return (
    <SignUpBtnStyled>
      Sign Up! <Arrow />
    </SignUpBtnStyled>
  );
};

export default SignUpBtn;
