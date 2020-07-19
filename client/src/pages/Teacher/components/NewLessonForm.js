import React, { useState, useContext } from "react";
import { UserContext } from "../../../utils/UserContext";
import API from "../../../utils/API";

export default function NewLessonForm({ showList }) {
  const style = {
    form: {
      backgroundColor: "white",
      padding: 10,
      border: "1px solid black",
    },
    btn: {
      marginLeft: 10,
    },
  };

  const defaultFormObject = {
    title: "",
    notes: "",
    video: "",
    resource1: "",
    resource2: "",
    resource3: "",
  };
  const [userState, setUserState] = useContext(UserContext);
  const [formObject, setFormObject] = useState(defaultFormObject);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormCancel(event) {
    event.preventDefault();
    showList();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.saveLesson({
        title: formObject.title,
        notes: formObject.notes,
        video: formObject.video,
        resources: [
          formObject.resource1,
          formObject.resource2,
          formObject.resource3,
        ],
        teacher: userState.name,
      })
        .then((res) => {
          console.log("saved");
          setFormObject(defaultFormObject);
          showList();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <form className="new-lesson" style={style.form}>
          <div className="row">
            <div className="input-field col s12 m8 inline">
              <input
                name="title"
                type="text"
                onChange={handleInputChange}
                value={formObject.title}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s12">
              <textarea
                name="notes"
                rows={4}
                className="materialize-textarea"
                style={{ height: "100px" }}
                onChange={handleInputChange}
                value={formObject.notes}
              />
              <label htmlFor="notes">Notes</label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="video"
                type="text"
                onChange={handleInputChange}
                value={formObject.video}
              />
              <label htmlFor="video">Video</label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="resource1"
                type="text"
                onChange={handleInputChange}
                value={formObject.resource1}
              />
              <label htmlFor="resource1">Resource 1</label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="resource2"
                type="text"
                onChange={handleInputChange}
                value={formObject.resource2}
              />
              <label htmlFor="resource2">Resource 2</label>
            </div>
            <div className="input-field col s12 m8 inline">
              <input
                name="resource3"
                type="text"
                onChange={handleInputChange}
                value={formObject.resource3}
              />
              <label htmlFor="resource3">Resource 3</label>
            </div>
            <div className="input-field col s12 right-align">
              <a
                href="/"
                className="btn-save btn blue"
                onClick={handleFormSubmit}
              >
                Save
              </a>
              <a
                href="/"
                className="btn red white-text"
                onClick={handleFormCancel}
                style={style.btn}
              >
                cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
