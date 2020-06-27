import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default function Sidenav() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <ul
      id="slide-out"
      className="sidenav sidenav-fixed grey darken-4 white-text"
    >
      <li>
        <h3>
          <Link to="/teacher/lessons">
            <i className="material-icons">import_contacts</i>
            Manage lessons
          </Link>
        </h3>
      </li>
      <li>
        <h3>
          <Link to="/teacher/students">
            <i className="material-icons">account_box</i>
            Manage students
          </Link>
        </h3>
      </li>
      <li>
        <h3>
          <Link to="/techer/live">
            <i className="material-icons">live_tv</i>
            Live
          </Link>
        </h3>
      </li>
      <li>
        <h3>
          <Link to="/techer/discuss">
            <i className="material-icons">chat</i>Discussions
          </Link>
        </h3>
      </li>
    </ul>
  );
}
