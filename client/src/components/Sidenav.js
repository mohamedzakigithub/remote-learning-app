import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default function Sidenav() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <ul
        id="slide-out"
        className="sidenav sidenav-fixed grey darken-4 white-text"
      >
        <li>
          <ul className="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="large material-icons large">import_contacts</i>
                <h3>Lessons</h3>
              </div>
              <div className="collapsible-body">
                <ul className="collection">
                  <li className="collection-item">
                    <Link to="/lesson">Lesson 1</Link>
                  </li>
                  <li className="collection-item">
                    <a href="#!">Lesson 2</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <Link to="/live">
              <i className="material-icons">live_tv</i>
              Live
            </Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to="/discuss">
              <i className="material-icons">chat</i>Discussions
            </Link>
          </h3>
        </li>
      </ul>
    </div>
  );
}
