import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import picture from "../../../img/user-placeholder.png";
import { UserContext } from "../../../utils/UserContext";

export default function Sidenav({ setView }) {
  const [userState] = useContext(UserContext);
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
        <img
          className="circle"
          src={userState.picture || picture}
          alt="profile"
        />
        <p>{userState.name}</p>
        <p>{userState.email}</p>
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
