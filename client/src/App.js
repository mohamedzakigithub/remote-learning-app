import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Student from "./pages/Student/";
import Home from "./pages/Home/";
import Teacher from "./pages/Teacher/";
import { ProtectedRoute } from "./protectedRoute";
import { UserProvider } from "./utils/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Teacher /> */}
            <Home />
            {/* <Student /> */}
          </Route>
          <ProtectedRoute exact path="/teacher" component={Teacher} />
          <ProtectedRoute exact path="/student" component={Student} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </UserProvider>
  );
}
