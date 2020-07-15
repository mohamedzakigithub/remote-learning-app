import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import ReactPlayer from "react-player";
import M from "materialize-css";

export default function Lesson({ lessonId }) {
  const [lesson, setLesson] = useState({});

  const style = {
    box: {
      height: "70vh",
      border: "2px solid black",
      borderRadius: 5,
      padding: 20,
      backgroundColor: "white",
    },
  };

  useEffect(() => {
    M.AutoInit();
    API.getLesson(lessonId)
      .then((res) => setLesson(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
        <h3 className="center">{lesson.title}</h3>
        <br />
        <div className="col s12 m10 offset-m1">
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

          <div id="notes" className="col s12" style={style.box}>
            {lesson.notes}
          </div>
          <div id="video" className="col s12" style={style.box}>
            <div style={{ height: "100%", width: "100%" }}>
              <ReactPlayer url={lesson.video} width="100%" height="100%" />
            </div>
          </div>
          <div id="resources" className="col s12" style={style.box}>
            <ul>
              {lesson.resources ? (
                lesson.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource}
                    </a>
                  </li>
                ))
              ) : (
                <p>No resources attached for this lesson</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
