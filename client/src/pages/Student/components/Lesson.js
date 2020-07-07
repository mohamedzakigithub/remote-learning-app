import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../../utils/API";
import ReactPlayer from "react-player";
import M from "materialize-css";

export default function Lesson({ lessonId }) {
  const [lesson, setLesson] = useState({});

  const style = {
    box: {
      height: "50vh",
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
  }, [lesson]);

  return (
    <div>
      <div className="row">
        <h5 className="center">{lesson.title}</h5>
        <br />
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

          <div id="notes" className="col s12" style={style.box}>
            {lesson.notes}
          </div>
          <div id="video" className="col s12">
            <div>
              <ReactPlayer url={lesson.video} width="100%" />
            </div>
          </div>
          <div id="resources" className="col s12" style={style.box}>
            <ul>
              {lesson.resources ? (
                lesson.resources.map((resource) => (
                  <li>
                    <a href={resource.url} target="_blank">
                      {resource.title}
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
