import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Student from "./pages/Student/";
import Home from "./pages/Home/";
import Teacher from "./pages/Teacher/";
import { ProtectedRoute } from "./protectedRoute";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Student />
          {/* <Home setAuthenticated={setAuthenticated} /> */}
        </Route>
        <ProtectedRoute
          authenticated={authenticated}
          exact
          path="/teacher"
          component={Teacher}
        />
        <ProtectedRoute
          authenticated={authenticated}
          exact
          path="/student"
          component={Student}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}
