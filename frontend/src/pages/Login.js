import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { logInUser, getTags, checkIfLogged } from "../actions/userActions";
import MainNavbar from "../templates/MainNavbar";
import { ScaleLoader } from "react-spinners";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    const { getTags, checkIfLogged } = this.props;
    getTags();
    if (localStorage.getItem("user")) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      checkIfLogged(userInfo);
      this.props.history.push("/profile");
    }
  }
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { loading } = this.props;
    e.preventDefault();
    const { logInUser } = this.props;
    const { email, password } = this.state;
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
              <Button color="primary">Login</Button>
            </Form>
          )}
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.users.isLoading
});
export default connect(
  mapStateToProps,
  { logInUser, getTags, checkIfLogged }
)(Login);
