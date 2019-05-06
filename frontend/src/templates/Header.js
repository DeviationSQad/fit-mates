import React from "react";
import Claim from "../components/Claim";
import Button from "../components/Button";
import LearnMoreBtn from "../components/LearnMoreBtn";
import Overlay from "../components/Overlay";
import Img from "../components/Img";
import { GridContainer, LeftColumn } from "../assets/styles/LayoutStyles";

const Header = () => {
  return (
    <GridContainer>
      <LeftColumn>
        <div>
          <Claim />
          <Button>Sign Up!</Button>
        </div>
        <LearnMoreBtn />
      </LeftColumn>
      <div>
        <Overlay>
          <Img />
        </Overlay>
      </div>
    </GridContainer>
  );
};
export default Header;
