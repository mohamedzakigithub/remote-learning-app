import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import userPhotoPlaceholder from "../../../img/userPhotoPlaceholder.png";
import userBG from "../../../img/userBG.jpg";
import { UserContext } from "../../../utils/UserContext";
import API from "../../../utils/API";

export default function Sidenav({ setView }) {
  const style = {
    image: { margin: "0 auto", height: 80, display: "block" },
    sidenav: {
      width: "275px",
      backgroundColor: "#c0bebf",
      color: "black",
    },
    user: {
      backgroundImage: `url(${userBG})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 220,
      textAlign: "center",
      padding: 50,
    },
    li: { marginTop: 35, marginBottom: 35 },
    link: { color: "black", padding: 10, backgroundColor: "#c0bebf" },
    i: { paddingRight: 5, margin: 0 },
    menu: {
      marginTop: 30,
    },
    signout: {
      marginTop: 20,
      display: "block",
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
          src={userState.photo || userPhotoPlaceholder}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = userPhotoPlaceholder;
          }}
          alt="profile"
          style={style.image}
        />
        <i className="black-text center" style={{ fontWeight: 900 }}>
          {userState.name}
        </i>
        <br />
        <a
          href="/"
          className="waves-effect waves-light btn red"
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
        <li style={style.li}>
          <h5>
            <Link
              className="collection-item"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setView("Discussions");
              }}
              style={style.link}
            >
              <i className="material-icons" style={style.i}>
                message
              </i>
              Discussions
            </Link>
          </h5>
        </li>
      </ul>
    </div>
  );
}
