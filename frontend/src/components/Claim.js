import React, { Component } from "react";
import { ClaimAnimated } from "../assets/styles/HomeStyledComponents";

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
