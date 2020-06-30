import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default function Sidenav() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div
      id="slide-out"
      className="valign-wrapper sidenav sidenav-fixed"
      style={{
        width: "250px",
        marginTop: 60,
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      <ul>
        <li>
          <h6>
            <Link to="/teacher/lessons">
              <i className="material-icons">import_contacts</i>
              Manage lessons
            </Link>
          </h6>
        </li>
        <li>
          <h6>
            <Link to="/teacher/students">
              <i className="material-icons">account_box</i>
              Manage students
            </Link>
          </h6>
        </li>
        <li>
          <h6>
            <Link to="/techer/live">
              <i className="material-icons">live_tv</i>
              Live class
            </Link>
          </h6>
        </li>
      </ul>
    </div>
  );
}
