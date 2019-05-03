import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import ProfileForm from "../components/ProfileForm";
import { connect } from "react-redux";
import { addUser, getTags, checkIfLogged } from "../actions/userActions";
import MainNavbar from "../templates/MainNavbar";
import { Button, Container } from "reactstrap";
import { ScaleLoader } from "react-spinners";

class Register extends Component {
  state = {
    step: 1,
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    dob: "",
    city: "",
    country: "",
    bio: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: ""
  };
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    const {
      email,
      first_name,
      last_name,
      password,
      dob,
      city,
      country,
      bio,
      tag1,
      tag2,
      tag3,
      tag4
    } = this.state;
    const user = {
      email,
      first_name,
      last_name,
      password,
      profile: {
        dob,
        city,
        country,
        bio,
        tag1,
        tag2,
        tag3,
        tag4
      }
    };
    this.props.addUser(user);
    setTimeout(() => {
      this.props.history.push("/profile");
    }, 2000);
  };
  handleClick = () => {
    let { step } = this.state;
    if (step === 1) {
      this.setState({ step: 2 });
    } else {
      this.setState({ step: 1 });
    }
  };
  componentDidMount() {
    const { getTags, checkIfLogged, history } = this.props;
    getTags();
    if (localStorage.getItem("user")) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      checkIfLogged(userInfo);
      history.push("/profile");
    }
  }
  render() {
    const { step } = this.state;
    const { loading, tags } = this.props;
    const stepButtonText = step === 1 ? "Next" : "Back";
    return (
      <>
        <MainNavbar />
        <Container>
          {loading ? (
            <ScaleLoader
              sizeUnit={"px"}
              size={150}
              color={"#123abc"}
              loading={this.props.loading}
            />
          ) : step === 1 ? (
            <RegisterForm handleChange={this.handleChange} />
          ) : (
            <ProfileForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              tags={tags}
            />
          )}
          {step === 1 ? (
            <Button color="primary" onClick={this.handleClick}>
              Next
            </Button>
          ) : null}
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.users.isLoading,
  tags: state.users.availableTags
});
export default connect(
  mapStateToProps,
  {
    addUser,
    getTags,
    checkIfLogged
  }
)(Register);
