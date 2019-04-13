import React, { Component } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import EventList from "../components/EventList";
import ProfileInfo from "../components/ProfileInfo";
import { Col } from "reactstrap";
class Profile extends Component {
  render() {
    return (
      <>
        <Navbar>
          <Logo name="FitMates" />
          <NavMenu>
            <NavLink name="create-event">Create event</NavLink>
            <NavLink name="find-event">Find events</NavLink>
            <Button text="Logout" />
          </NavMenu>
        </Navbar>
        <Wrapper>
          <Col>
            <EventList />
          </Col>
          <Col>
            <EventList />
          </Col>
          <Col>
            <ProfileInfo />
          </Col>
        </Wrapper>
      </>
    );
  }
}

export default Profile;
