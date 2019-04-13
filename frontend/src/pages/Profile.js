import React, { Component } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import EventList from "../components/EventList";
import ProfileInfo from "../components/ProfileInfo";
class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar>
          <Logo />
          <NavMenu>
            <NavLink />
            <NavLink />
            <NavLink />
            <Button />
          </NavMenu>
        </Navbar>
        <Wrapper>
          <EventList />
          <EventList />
          <ProfileInfo />
        </Wrapper>
      </>
    );
  }
}

export default Profile;
