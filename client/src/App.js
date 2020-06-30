import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SidenavStudent from "./components/student/Sidenav";
import SidenavTeacher from "./components/teacher/Sidenav";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Lesson from "./components/student/Lesson";
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
          <Route exact path="/student">
            <SidenavStudent />
            <Student />
          </Route>
          <Route exact path="/lesson/:id">
            <SidenavStudent />
            <Lesson />
          </Route>
          <Route exact path="/teacher">
            <SidenavTeacher />
            <Teacher />
          </Route>
          <Route exact path="/teacher/lessons">
            <SidenavTeacher />
            <Lessons />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
