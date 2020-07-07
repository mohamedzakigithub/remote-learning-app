import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import picture from "../../../img/user-placeholder.png";
import userBG from "../../../img/userBG.jpg";
import M from "materialize-css";
import { UserContext } from "../../../utils/UserContext";

export default function Sidenav({ setView, showLesson }) {
  const [lessons, setLessons] = useState([]);
  const [userState] = useContext(UserContext);

  const style = {
    sidenav: {
      width: "270px",
      backgroundColor: "#c0bebf",
      color: "black",
    },
    li: { marginTop: 35, marginBottom: 35 },
    link: { color: "black", padding: 10, backgroundColor: "#c0bebf" },
    i: { paddingRight: 10, margin: 0 },
  };

  useEffect(() => {
    loadLessons();
    M.AutoInit();
  }, []);

  function loadLessons() {
    API.getLessons()
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div
      id="slide-out"
      className=" sidenav sidenav-fixed"
      style={style.sidenav}
    >
      <div style={{ backgroundImage: `url(${userBG})`, textAlign: "center" }}>
        <img
          className="circle "
          style={{ margin: "0 auto", size: 80, display: "block" }}
          src={userState.picture || picture}
          alt="profile"
        />
        <i className="white-text center">{userState.name}</i>
        <br />
      </div>
      <ul>
        <li>
          <ul className="collapsible">
            <li style={style.li}>
              <h5>
                <div className="collapsible-header" style={style.link}>
                  <i className="material-icons" style={style.i}>
                    import_contacts
                  </i>
                  Lessons
                </div>
              </h5>
              <div className="collapsible-body " style={style.link}>
                <ul className="collection ">
                  {lessons.length ? (
                    lessons.map((lesson) => (
                      <Link
                        className="collection-item"
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          showLesson(lesson._id);
                        }}
                        key={lesson._id}
                        style={style.link}
                      >
                        {lesson.title}
                      </Link>
                    ))
                  ) : (
                    <h4 className="collection-item">No lessons present</h4>
                  )}
                </ul>
              </div>
            </li>
          </ul>
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
