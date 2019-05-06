import React from "react";
import { GridContainer, LeftColumn } from "../assets/styles/LayoutStyles";
import img1 from "../assets/images/action-active-athlete-1571939.jpg";
import img2 from "../assets/images/beach-beautiful-enjoyment-1671217.jpg";
import img3 from "../assets/images/casual-close-up-colors-1954524.jpg";
import Title from "../components/Title";
import TextContent from "../components/TextContent";
import Button from "../components/Button";
import styled from "styled-components";

const ImgWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  grid-template-columns: 1fr 0.8fr;
  justify-items: center;
  align-items: center;
  grid-gap: 3rem;
  width: 70%;
  margin: 0 auto;
`;

const Img = styled.img`
  max-width: 100%;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.42);
`;
const BigImg = styled(Img)`
  max-width: 80%;
`;

const ImgContainer = styled.div`
  text-align: center;
  grid-column: span ${({ span }) => (span ? "2" : "1")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding-left: 3.6rem;
`;

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const About = () => {
  return (
    <GridContainer>
      <LeftColumn>
        <ImgWrapper>
          <ImgContainer>
            <Img src={img3} alt="Working out people" />
          </ImgContainer>
          <ImgContainer>
            <Img src={img2} alt="Working out people" />
          </ImgContainer>
          <ImgContainer span>
            <BigImg src={img1} alt="Working out people" />
          </ImgContainer>
        </ImgWrapper>
      </LeftColumn>
      <AboutContent>
        <AboutWrapper>
          <Title title="What’s going on with Fitmates ?" />
          <TextContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab
            reiciendis velit, corrupti labore ratione iusto quod hic saepe odio
            facilis optio voluptatum perferendis eius eaque quas possimus
            molestias doloribus?
          </TextContent>
          <Button secondary>Want more info?</Button>
        </AboutWrapper>
      </AboutContent>
    </GridContainer>
  );
};

export default About;
