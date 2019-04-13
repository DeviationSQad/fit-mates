import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./utils/theme";
const GlobalStyle = createGlobalStyle`
  html,body { 
    height: 100%;
  }
`;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyle />
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
