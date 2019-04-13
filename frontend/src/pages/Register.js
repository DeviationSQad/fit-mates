import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import ProfileForm from "../components/ProfileForm";
import { connect } from "react-redux";
import { changeInput } from "../actions/formActions";
import { addUser } from "../actions/userActions";
import MainNavbar from "../components/MainNavbar";
import { Button } from "reactstrap";
import { ScaleLoader } from "react-spinners";
class Register extends Component {
  state = {
    step: 1
  };
  handleChange = (name, value) => {
    this.props.changeInput(name, value);
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
    } = this.props;
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
    this.props.history.push("/profile");
  };
  handleClick = () => {
    let { step } = this.state;
    if (step === 1) {
      this.setState({ step: 2 });
    } else {
      this.setState({ step: 1 });
    }
  };

  render() {
    const { step } = this.state;
    const { loading } = this.props;
    const stepButtonText = step === 1 ? "Next" : "Back";
    return (
      <>
        <MainNavbar />
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
          />
        )}
        <Button onClick={this.handleClick}>{stepButtonText}</Button>
      </>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  email: state.form.email,
  first_name: state.form.first_name,
  last_name: state.form.last_name,
  password: state.form.password,
  dob: state.form.dob,
  city: state.form.city,
  country: state.form.country,
  bio: state.form.bio,
  tag1: state.form.tag1,
  tag2: state.form.tag2,
  tag3: state.form.bio3,
  tag4: state.form.bio4,
  loading: state.users.isLoading
});
export default connect(
  mapStateToProps,
  {
    changeInput,
    addUser
  }
)(Register);
