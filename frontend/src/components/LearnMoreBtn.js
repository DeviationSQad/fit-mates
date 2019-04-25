import React from "react";
import {
  LearnMoreBtnStyled,
  ArrowDownStyled,
  LearnMoreWrapper
} from "../assets/styles/HomeStyledComponents";

const LearnMoreBtn = () => {
  return (
    <LearnMoreWrapper>
      <ArrowDownStyled />
      <LearnMoreBtnStyled>Learn more</LearnMoreBtnStyled>
    </LearnMoreWrapper>
  );
};

export default LearnMoreBtn;
