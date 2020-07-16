import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";

export default function Student({ showLesson }) {
  const style = {
    list: {
      border: "1px solid black",
    },
    bg: {
      backgroundColor: "#c0bebf",
    },
  };
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
    <div className="row">
      <h3 className="center">Browse lessons</h3>
      <div className="col s12 m10 offset-m1 ">
        <ul className="collection with-header" style={style.list}>
          <li className="collection-header" style={style.bg}>
            <h4>Lessons</h4>
          </li>
          {lessons.length
            ? lessons.map((lesson) => (
                <Link
                  className="collection-item black-text"
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    showLesson(lesson._id);
                  }}
                  key={lesson._id}
                >
                  {lesson.title}
                </Link>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
