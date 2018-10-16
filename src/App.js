import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { routes } from "./routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar items={routes} />
        <Container>
          <Switch>
            {routes.map(({ name, to, Component }) => (
              <Route key={name} exact path={to} component={Component} />
            ))}
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
