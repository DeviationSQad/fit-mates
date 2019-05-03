import React from "react";
import styled from "styled-components";
const AboutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8.4rem;
`;
const About = () => {
  return (
    <AboutStyled>
      <ImgWrapper>
        <div>
          <p>img1</p>
          <p>img2</p>
          <p>img3</p>
        </div>
      </ImgWrapper>
      <div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
          quam tempore consectetur porro cupiditate magnam rem, debitis
          inventore, dolor placeat minima. Dignissimos reiciendis quae quis non
          quaerat, minima tempore.
        </p>
        <button>More info</button>
      </div>
    </AboutStyled>
  );
};

export default About;
