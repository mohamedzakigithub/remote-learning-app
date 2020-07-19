import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function Student({ showLesson }) {
  const style = {
    list: {
      border: "1px solid black",
      overflow: "hidden",
      overflowY: "scroll",
      height: "80vh",
    },
    header: {
      backgroundColor: "#004e89",
      color: "white",
    },
  };
  const [lessons, setLessons] = useState([]);
  const [userState, setUserState] = useContext(UserContext);

  useEffect(() => {
    loadLessons();
  }, []);

  function loadLessons() {
    API.getLessons(userState.teacher)
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="row">
      <h3 className="center">Browse lessons</h3>
      <div className="col s12 m10 offset-m1 ">
        <ul className="collection " style={style.list}>
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
