import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../../utils/API";
import M from "materialize-css";

export default function Lesson({ lessonId }) {
  const [lesson, setLesson] = useState({});

  useEffect(() => {
    M.AutoInit();
    API.getLesson(lessonId)
      .then((res) => setLesson(res.data))
      .catch((err) => console.log(err));
  }, [lesson]);

  return (
    <div>
      <div className="row">
        <h1 className="center">{lesson.title}</h1>
        <div className="col s12 m8 offset-m2">
          <ul className="tabs">
            <li className="tab col s4">
              <a href="#notes" className="black-text">
                Notes
              </a>
            </li>
            <li className="tab col s4">
              <a href="#video" className="black-text">
                Video
              </a>
            </li>
            <li className="tab col s4 ">
              <a href="#resources" className="black-text">
                resources
              </a>
            </li>
          </ul>

          <div id="notes" className="col s12">
            {lesson.notes}
          </div>
          <div id="video" className="col s12">
            {lesson.video}
          </div>
          <div id="resources" className="col s12">
            {lesson.resources}
          </div>
        </div>
      </div>
    </div>
  );
}
