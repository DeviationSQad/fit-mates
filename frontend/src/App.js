import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/GlobalStyles";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
