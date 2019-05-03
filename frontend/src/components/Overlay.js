import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";
const OverlayStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(${({ theme }) => theme.colors.primaryRGB}, 1);
  position: relative;
  z-index: 99;
`;
const OverlayAnimated = posed(OverlayStyled)({
  unmounted: {
    x: "50%",
    opacity: 0
  },
  mounted: {
    x: "0",
    opacity: 1,
    delay: 500
  }
});

class Overlay extends Component {
  state = {
    isEntered: false
  };
  componentDidMount() {
    this.setState({ isEntered: !this.state.isEntered });
  }
  render() {
    const { isEntered } = this.state;
    const { children } = this.props;
    return (
      <OverlayAnimated pose={isEntered ? "mounted" : "unmounted"}>
        {children}
      </OverlayAnimated>
    );
  }
}

export default Overlay;
