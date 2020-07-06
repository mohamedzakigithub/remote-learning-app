import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import picture from "../../../img/user-placeholder.png";

export default function Sidenav({ setView }) {
  useEffect(() => {
    M.AutoInit();
  });

  const style = {
    sidenav: {
      width: "270px",
      backgroundColor: "#484d5c",
      color: "3ffce00",
    },
    li: { marginTop: 35, marginBottom: 35 },
    link: { color: "#ffce00", padding: 10 },
    i: { paddingRight: 10 },
  };

  return (
    <div id="slide-out" className="sidenav sidenav-fixed" style={style.sidenav}>
      <div className="user-view">
        <a href="#user">
          <img className="circle" src={picture} alt="profile" />
        </a>
        <a href="#name">
          <span className="white-text name">John Doe</span>
        </a>
        <a href="#email">
          <span className="white-text email">jdandturk@gmail.com</span>
        </a>
      </div>
      <ul>
        <li></li>
        <li style={style.li}>
          <h5>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setView("Lessons");
              }}
              style={style.link}
            >
              <i className="material-icons" style={style.i}>
                import_contacts
              </i>
              Manage lessons
            </Link>
          </h5>
        </li>
        <li style={style.li}>
          <h5>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setView("Students");
              }}
              style={style.link}
            >
              <i className="material-icons" style={style.i}>
                account_box
              </i>
              Manage students
            </Link>
          </h5>
        </li>
        <li style={style.li}>
          <h5>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setView("Liveclass");
              }}
              style={style.link}
            >
              <i className="material-icons" style={style.i}>
                live_tv
              </i>
              Live class
            </Link>
          </h5>
        </li>
      </ul>
    </div>
  );
}
