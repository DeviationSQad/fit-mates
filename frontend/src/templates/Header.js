import React from "react";
import Claim from "../components/Claim";
import SignUpBtn from "../components/SignUpBtn";
import LearnMoreBtn from "../components/LearnMoreBtn";
import Overlay from "../components/Overlay";
import Img from "../components/Img";
import styled from "styled-components";
const HeaderStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8.4rem;
`;
const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <div>
          <Claim />
          <SignUpBtn />
        </div>
        <LearnMoreBtn />
      </HeaderWrapper>
      <div>
        <Overlay>
          <Img />
        </Overlay>
      </div>
    </HeaderStyled>
  );
};
export default Header;
