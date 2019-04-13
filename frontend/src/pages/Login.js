import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Container } from "reactstrap";
import { connect } from "react-redux";
import { changeInput } from "../actions/formActions";
import { logInUser } from "../actions/userActions";
import MainNavbar from "../components/MainNavbar";
import { ScaleLoader } from "react-spinners";
class Login extends Component {
  handleChange = (name, value) => {
    this.props.changeInput(name, value);
  };
  handleSubmit = e => {
    const { loading } = this.props;
    e.preventDefault();
    const { email, password, logInUser } = this.props;
    const user = {
      email,
      password
    };
    logInUser(user.email, user.password);
    if (!loading) {
      this.props.history.push("/profile");
    }

    e.target.reset();
  };
  render() {
    const { loading } = this.props;
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
          ) : (
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={e => {
                    this.handleChange(e.target.name, e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={e => {
                    this.handleChange(e.target.name, e.target.value);
                  }}
                />
              </FormGroup>
              <input type="submit" value="Log in" />
            </Form>
          )}
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => ({
  email: state.form.email,
  password: state.form.password,
  loading: state.users.isLoading
});
export default connect(
  mapStateToProps,
  { changeInput, logInUser }
)(Login);
