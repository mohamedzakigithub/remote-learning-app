import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import picture from "../../../img/user-placeholder.png";
import M from "materialize-css";

export default function Sidenav({ setView, showLesson }) {
  const [lessons, setLessons] = useState([]);

  const style = {
    sidenav: {
      width: "270px",
      backgroundColor: "#484d5c",
      color: "3ffce00",
    },
    li: { marginTop: 35, marginBottom: 35 },
    link: { color: "#ffce00", padding: 10, backgroundColor: "#484d5c" },
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
