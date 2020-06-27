import React, { useEffect } from "react";
import M from "materialize-css";

export default function Lessons() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="main">
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">Add a new lesson</div>
          <div className="collapsible-body">
            <form className="new-lesson">
              <div className="row">
                <div className="input-field col s12 m4 inline">
                  <input id="title" type="text" />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    id="new-story-body"
                    rows={5}
                    className="materialize-textarea"
                    defaultValue={""}
                  />
                  <label htmlFor="new-story-body">Story</label>
                </div>
                <div className="input-field col s12 right-align">
                  <a
                    htmlFor="new-story-body"
                    className="btn-floating waves-effect waves-light teal btn-post"
                  >
                    <i className="material-icons">post_add</i>
                  </a>
                  <a
                    htmlFor="new-story-body"
                    className="btn-floating waves-effect waves-light red lighten-2 btn-clear"
                  >
                    <i className="material-icons">clear</i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
}
