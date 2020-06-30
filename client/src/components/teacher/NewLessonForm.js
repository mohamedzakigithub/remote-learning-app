import React, { useState } from "react";
import API from "../../utils/API";

export default function NewLessonForm() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.notes) {
      API.saveLesson({
        title: formObject.title,
        notes: formObject.notes,
        video: formObject.video,
        resources: [formObject.resource1, formObject.resource2, formObject.resource3],
      })
        .then((res) => {
          console.log("saved");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <form className="new-lesson">
      <div className="row">
        <div className="input-field col s12 m8 inline">
          <input name="title" type="text" onChange={handleInputChange} />
          <label htmlFor="title">Title</label>
        </div>
        <div className="input-field col s12">
          <textarea
            name="notes"
            rows={4}
            className="materialize-textarea"
            style={{ height: "100px" }}
            defaultValue={""}
            onChange={handleInputChange}
          />
          <label htmlFor="notes">Notes</label>
        </div>
        <div className="input-field col s12 m8 inline">
          <input name="video" type="text" onChange={handleInputChange} />
          <label htmlFor="video">Video</label>
        </div>
        <div className="input-field col s12 m8 inline">
          <input name="resource1" type="text" onChange={handleInputChange} />
          <label htmlFor="resource1">Resource 1</label>
        </div>
        <div className="input-field col s12 m8 inline">
          <input name="resource2" type="text" onChange={handleInputChange} />
          <label htmlFor="resource2">Resource 2</label>
        </div>
        <div className="input-field col s12 m8 inline">
          <input name="resource3" type="text" onChange={handleInputChange} />
          <label htmlFor="resource3">Resource 3</label>
        </div>
        <div className="input-field col s12 right-align">
          <a className="btn-save btn blue" onClick={handleFormSubmit}>
            Save
          </a>
          <a className="btn-clear btn red">Clear</a>
        </div>
      </div>
    </form>
  );
}
