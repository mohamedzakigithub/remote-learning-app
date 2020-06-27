import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Lessons from "./components/teacher/Lessons";

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
            <Student />
          </Route>
          <Route exact path="/teacher/lessons">
            <Teacher />
            <Lessons />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
