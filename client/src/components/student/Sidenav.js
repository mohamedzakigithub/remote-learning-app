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
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <ul>
        <li>
          <ul className="collapsible">
            <li>
              <h5>
                <div
                  className="collapsible-header white-text"
                  style={{ padding: 0 }}
                >
                  <i className="material-icons">import_contacts</i>
                  Lessons
                </div>
              </h5>
              <div className="collapsible-body ">
                <ul className="collection ">
                  <li className="collection-item ">
                    <Link to="/lesson" className="indigo darken-4 white-text">
                      Lesson 1
                    </Link>
                  </li>
                  <li className="collection-item ">
                    <Link to="#!" className="indigo darken-4 white-text">
                      Lesson 2
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h5>
            <Link to="/live" className="white-text">
              <i className="material-icons ">live_tv</i>
              Live
            </Link>
          </h5>
        </li>
        <li>
          <h5>
            <Link to="/discuss" className="white-text">
              <i className="material-icons">chat</i>Discussions
            </Link>
          </h5>
        </li>
      </ul>
    </div>
  );
}
