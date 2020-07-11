import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import picture from "../../../img/user-placeholder.png";
import userBG from "../../../img/userBG.jpg";
import M from "materialize-css";
import { UserContext } from "../../../utils/UserContext";

export default function Sidenav({ setView }) {
  const style = {
    image: { margin: "0 auto", height: 80, display: "block" },
    sidenav: {
      width: "270px",
      backgroundColor: "#c0bebf",
      color: "black",
    },
    user: {
      backgroundImage: `url(${userBG})`,
      textAlign: "center",
      padding: 50,
    },
    li: { marginTop: 35, marginBottom: 35 },
    link: { color: "black", padding: 10, backgroundColor: "#c0bebf" },
    i: { paddingRight: 10, margin: 0 },
    menu: {
      position: "relative",
      top: "50px",
    },
    signout: {
      marginTop: 30,
    },
  };

  const [userState, setUserState] = useContext(UserContext);

  useEffect(() => {
    M.AutoInit();
  });

  function logout() {
    API.logout().then((res) => {
      setUserState({ ...userState, authenticated: false });
    });
  }

  return (
    <div
      id="slide-out"
      className=" sidenav sidenav-fixed"
      style={style.sidenav}
    >
      <div style={style.user}>
        <img
          className="circle "
          style={style.image}
          src={userState.picture || picture}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = picture;
          }}
          alt="profile"
        />
        <i className="white-text center">{userState.name}</i>
        <a
          class="waves-effect waves-light btn red"
          onClick={logout}
          style={style.signout}
        >
          Sign out
        </a>
      </div>
      <ul style={style.menu}>
        <li style={style.li}>
          <h5>
            <Link
              className="collection-item"
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
              Lessons
            </Link>
          </h5>
        </li>
        <li style={style.li}>
          <h5>
            <Link
              className="collection-item"
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
