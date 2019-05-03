import React, { Component } from "react";

import posed from "react-pose";
import styled from "styled-components";
const ClaimStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  max-width: 65rem;
  margin-top: 25rem;
  margin-bottom: 2.2rem;
`;
const ClaimAnimated = posed(ClaimStyled)({
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
class Claim extends Component {
  state = {
    isEntered: false
  };
  componentDidMount() {
    this.setState({ isEntered: !this.state.isEntered });
  }
  render() {
    const { isEntered } = this.state;
    return (
      <ClaimAnimated pose={isEntered ? "mounted" : "unmounted"}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor
        tempora nobis architecto, ullam natus nostrum quis ipsum recusandae,
        obcaecati beatae harum aut hic ad! Optio soluta numquam hic neque.
      </ClaimAnimated>
    );
  }
}

export default Claim;
