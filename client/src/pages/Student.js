import React, { useState, useEffect } from "react";
import Sidenav from "../components/student/Sidenav";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function Student() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    loadLessons();
  }, []);

  function loadLessons() {
    API.getLessons()
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Sidenav />
      <div className="main ">
        <div className="row ">
          <div className="col s12 m6 ">
            <ul className="collection with-header">
              <li className="collection-header">
                <h4>Lessons</h4>
              </li>
              {lessons.length ? (
                lessons.map((lesson) => (
                  <Link
                    className="collection-item"
                    to={"/lessons/" + lesson._id}
                    key={lesson._id}
                  >
                    {lesson.title}
                  </Link>
                ))
              ) : (
                <h3>No lessons</h3>
              )}
            </ul>
          </div>
          <div className="col s12 m6">
            <div className="row studentDiv">
              <a className="waves-effect waves-light btn-large">Live class</a>
            </div>
            <div className="row studentDiv">
              <a className="waves-effect waves-light btn-large">Discussions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
