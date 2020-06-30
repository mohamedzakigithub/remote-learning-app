import React, { useState, useEffect } from "react";
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
    <div className="row student">
      <div className="col s12 m6 ">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Lessons</h4>
          </li>
          {lessons.length ? (
            lessons.map((lesson) => (
              <Link className="collection-item" to={"/lesson/" + lesson._id} key={lesson._id}>
                {lesson.title}
              </Link>
            ))
          ) : (
            <h4 className="collection-item">No lessons present</h4>
          )}
        </ul>
      </div>
      <div className="col s12 m6"></div>
    </div>
  );
}
