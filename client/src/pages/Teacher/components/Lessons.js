import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import M from "materialize-css";
import EditLessonFrom from "./EditLessonForm";
import NewLessonFrom from "./NewLessonForm";

// Style

const style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  card: {
    height: "auto",
    width: 250,
    backgroundColor: "white",
    borderRadius: 5,
    border: "1px solid black",
    margin: 10,
    padding: 10,
  },
  content: {
    height: 48,
  },
  add: {
    display: "block",
    margin: "auto",
    height: 150,
    width: "auto",
  },
  center: {
    textAlign: "center",
    padding: 10,
  },
  text: {
    fontSize: 12,
    margin: "10px, 0px",
  },
  button: { backgroundColor: "#0667d8" },
  action: {
    padding: 0,
  },
};

export default function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [hideList, setHideList] = useState("");
  const [hideNewForm, setHideNewForm] = useState("hide");
  const [hideEditForm, setHideEditForm] = useState({
    hide: "hide",
    lesson: "",
  });

  useEffect(() => {
    M.AutoInit();
    loadLessons();
  }, [hideList]);

  function showEditForm(id) {
    API.getLesson(id)
      .then((res) => {
        setHideNewForm("hide");
        setHideList("hide");
        setHideEditForm({ hide: "", lesson: res.data });
      })
      .catch((err) => console.log(err));
  }

  function showNewForm() {
    setHideNewForm("");
    setHideList("hide");
    setHideEditForm({ hide: "hide", id: "" });
  }

  function showList() {
    setHideNewForm("hide");
    setHideList("");
    setHideEditForm({ hide: "hide", id: "" });
  }

  function loadLessons() {
    API.getLessons()
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteLesson(id) {
    API.deleteLesson(id)
      .then((res) => loadLessons())
      .catch((err) => console.log(err));
  }

  return (
    <div className="lessons">
      <div className={`${hideNewForm}`}>
        <h3 className="center">Add a lesson</h3>
        <NewLessonFrom showList={showList} />
      </div>
      <div className={`${hideEditForm.hide}`}>
        <h3 className="center">Edit lesson</h3>
        {hideEditForm.lesson ? (
          <EditLessonFrom showList={showList} lesson={hideEditForm.lesson} />
        ) : null}
      </div>
      <div className={`row ${hideList} `}>
        <h3 className="center">Manage lessons</h3>
        <div className="col s12" style={style.container}>
          <div style={style.card}>
            <div style={style.center}>
              <button
                onClick={showNewForm}
                className="btn"
                style={style.button}
              >
                Add a lesson
              </button>
            </div>
          </div>

          {lessons.length
            ? lessons.map((lesson) => (
                <div className="card" style={style.card} key={lesson._id}>
                  <div className="cart-content" style={style.content}>
                    <p style={style.text}>{lesson.title}</p>
                  </div>
                  <div className="card-action" style={style.action}>
                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <i
                        className="material-icons right red-text"
                        onClick={() => deleteLesson(lesson._id)}
                      >
                        delete
                      </i>
                    </a>
                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <i
                        className="material-icons right black-text"
                        onClick={() => showEditForm(lesson._id)}
                      >
                        mode_edit
                      </i>
                    </a>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
