import React from "react";
import logo from "../../../img/logo.png";

const style = {
  logo: {
    padding: "0px 20px",
    color: "white",
    fontSize: "1.5rem",
    lineHeight: "60px",
  },
  logoImg: { height: "100%" },
  nav: { height: 60 },
  button: {
    position: "absolute",
    top: 20,
    right: 20,
    background: "none",
    border: "1px solid white",
  },
};

export default function Navbar({ view, setView }) {
  return (
    <div
      className="navbar-fixed"
      style={{ height: 40, display: "flex", alignItems: "center" }}
    >
      <nav style={style.nav}>
        <div className=" nav-wrapper">
          <img src={logo} style={style.logoImg} />
          {view === "StudentLogin" ? (
            <a
              style={style.button}
              className="btn-small"
              onClick={(e) => {
                e.preventDefault();
                setView("TeacherLogin");
              }}
            >
              Teacher's portal
            </a>
          ) : (
            <a
              style={style.button}
              className="btn-small"
              onClick={(e) => {
                e.preventDefault();
                setView("StudentLogin");
              }}
            >
              Students portal
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
