import React from "react";
import styled from "styled-components";
import homeBackground from "../assets/images/activity-adults-athletes-1855269.jpg";
const ImgStyled = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeBackground});
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
  background-size: cover;
  background-position: center;
`;
const Img = () => {
  return <ImgStyled />;
};

export default Img;
