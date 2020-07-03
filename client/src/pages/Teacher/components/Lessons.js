import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import M from "materialize-css";
import NewLessonForm from "./NewLessonForm";
import EditLessonForm from "./EditLessonForm";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    M.AutoInit();
    loadLessons();
  }, []);

  function loadLessons() {
    API.getLessons()
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }

  function deleteLesson(id) {
    API.deleteLesson(id)
      .then((res) => loadLessons())
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h3 className="center">Manage Lessons</h3>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <ul className="collapsible">
            <li>
              <div className="collapsible-header grey">
                <h6>
                  <i className="material-icons">add</i>
                  Add a new lesson
                </h6>
              </div>
              <div className="collapsible-body">
                <NewLessonForm />
              </div>
            </li>
          </ul>
          <ul className="collapsible">
            {lessons.length ? (
              lessons.map((lesson) => (
                <li key={lesson._id}>
                  <div className="collapsible-header grey" style={{ justifyContent: "space-between" }}>
                    <div>
                      <h6>{lesson.title}</h6>
                    </div>
                    <h6>
                      <i className="material-icons">edit</i>
                      <i
                        className="material-icons red-text "
                        onClick={(e) => {
                          e.nativeEvent.stopImmediatePropagation();
                          deleteLesson(lesson._id);
                        }}
                      >
                        delete
                      </i>
                    </h6>
                  </div>
                  <div className="collapsible-body">
                    <EditLessonForm lesson={lesson} />
                  </div>
                </li>
              ))
            ) : (
              <h5 className="collection-item">No lessons present</h5>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
