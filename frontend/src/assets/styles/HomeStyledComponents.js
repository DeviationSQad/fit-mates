import styled from "styled-components";
import { ReactComponent as Arrow } from "../icons/arrow-right.svg";
import homeBackground from "../images/activity-adults-athletes-1855269.jpg";
import posed from "react-pose";
export const ClaimStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  max-width: 65rem;
  margin-top: 18rem;
`;
export const HomeStyled = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8.4rem;
`;
export const LearnMoreBtnStyled = styled.button`
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 0.7rem 1.6rem;
  width: 15rem;
  margin: 0 auto;
`;
export const SignUpBtnStyled = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.8rem 1.8rem;
  width: 20rem;
  margin-top: 3.4rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  z-index: 999;
  transition: 0.2s color ease-in-out;
  ::after {
    content: "";
    position: absolute;
    opacity: 0;
    transform: scaleX(0);
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    top: 0;
    left: 0;
    z-index: -1;
    transform-origin: left;
    transition: 0.2s opacity ease-in-out, 0.2s transform ease-in-out;
  }
  :hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const OverlayStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(${({ theme }) => theme.colors.primaryRGB}, 1);
  position: relative;
  z-index: 99;
`;

export const ImgStyled = styled.div`
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

export const ArrowDownStyled = styled(Arrow)`
  transform: rotate(90deg);
`;

export const LearnMoreWrapper = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem auto 0 auto;
`;

// animations

export const ClaimAnimated = posed(ClaimStyled)({
  unmounted: {
    x: "-50%",
    opacity: 0
  },
  mounted: {
    x: "0",
    opacity: 1,
    delay: 500
  }
});
