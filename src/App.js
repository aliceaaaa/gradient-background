import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Gradient from "./Gradient";
import NotFound from "./NotFound";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Gradient} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
