import React from "react";
import styled from "styled-components";

import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg";

const LearnMoreBtnStyled = styled.button`
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 0.7rem 1.6rem;
  width: 15rem;
  margin: 0 auto;
`;
const LearnMoreWrapper = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto auto 0 auto;
`;
const ArrowDownStyled = styled(Arrow)`
  transform: rotate(90deg);
`;
const LearnMoreBtn = () => {
  return (
    <LearnMoreWrapper>
      <ArrowDownStyled />
      <LearnMoreBtnStyled>Learn more</LearnMoreBtnStyled>
    </LearnMoreWrapper>
  );
};

export default LearnMoreBtn;
