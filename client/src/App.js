import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Student from "./pages/Student/";
import Home from "./pages/Home/";
import Teacher from "./pages/Teacher/";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/student">
            <Student />
          </Route>
          <Route exact path="/teacher">
            <Teacher />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
