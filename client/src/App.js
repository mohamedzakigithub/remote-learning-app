import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Live from "./components/Live";
import Lesson from "./components/Lesson";
import Journal from "./components/Journal";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Discussion from "./components/Discussion";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/teacher">
            <Teacher />
          </Route>
          <Route exact path="/student">
            <Sidenav />
            <Journal />
          </Route>
          <Route exact path="/lesson">
            <Sidenav />
            <Lesson />
          </Route>
          <Route exact path="/live">
            <Sidenav />
            <Live />
          </Route>
          <Route exact path="/discuss">
            <Sidenav />
            <Discussion />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
