import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
class App extends Component {
  state = {
    collapsed: true
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">
                FitMates
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <Link to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/register">Register</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/login">Login</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
