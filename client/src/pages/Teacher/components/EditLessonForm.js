import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import M from "materialize-css";

export default function EditLessonForm({ lesson, showList }) {
  const style = {
    form: {
      backgroundColor: "white",
      padding: 10,
      border: "1px solid black",
    },
  };

  const [formObject, setFormObject] = useState(lesson);

  useEffect(() => {
    M.AutoInit();
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.updateLesson(
        {
          title: formObject.title,
          notes: formObject.notes,
          video: formObject.video,
          resources: [
            formObject.resource1 || lesson.resources[0],
            formObject.resource2 || lesson.resources[1],
            formObject.resource3 || lesson.resources[2],
          ],
        },
        lesson._id
      )
        .then((res) => {
          console.log("saved");
          showList();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <form className="edit-lesson" style={style.form}>
          <div className="row">
            <div className="input-field col s12 m8 inline">
              <input
                name="title"
                type="text"
                onChange={handleInputChange}
                defaultValue={lesson.title}
              />
              <label className="active" htmlFor="title">
                Title
              </label>
            </div>
            <div className="input-field col s12">
              <textarea
                name="notes"
                rows={4}
                className="materialize-textarea"
                style={{ height: "100px" }}
                onChange={handleInputChange}
                defaultValue={lesson.notes}
              />
              <label className="active" htmlFor="notes">
                Notes
              </label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="video"
                id="video"
                type="text"
                onChange={handleInputChange}
                defaultValue={lesson.video}
              />
              <label className="active" htmlFor="video">
                Video
              </label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="resource1"
                type="text"
                onChange={handleInputChange}
                defaultValue={lesson.resources[0]}
              />
              <label className="active" htmlFor="resource1">
                Resource 1
              </label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="resource2"
                type="text"
                onChange={handleInputChange}
                defaultValue={lesson.resources[1]}
              />
              <label className="active" htmlFor="resource2">
                Resource 2
              </label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="resource3"
                type="text"
                onChange={handleInputChange}
                defaultValue={lesson.resources[2]}
              />
              <label className="active" htmlFor="resource3">
                Resource 3
              </label>
            </div>
            <div className="input-field col s12 right-align">
              <a
                href="/"
                className="btn-save btn blue"
                onClick={handleFormSubmit}
              >
                Save
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
