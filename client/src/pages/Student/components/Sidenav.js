import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import M from "materialize-css";

export default function Sidenav() {
  const [lessons, setLessons] = useState([]);

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
      className="valign-wrapper sidenav sidenav-fixed"
      style={{
        width: "250px",
        marginTop: 60,
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      <ul>
        <li>
          <ul className="collapsible black">
            <li>
              <h5>
                <div className="collapsible-header black white-text" style={{ padding: 0 }}>
                  <i className="material-icons">import_contacts</i>
                  Lessons
                </div>
              </h5>
              <div className="collapsible-body black">
                <ul className="collection black">
                  {lessons.length ? (
                    lessons.map((lesson) => (
                      <Link className="collection-item black white-text" to={"/lesson/" + lesson._id} key={lesson._id}>
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
