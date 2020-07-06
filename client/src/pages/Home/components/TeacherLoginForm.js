import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function TeacherLoginForm({ setView, setAuthenticated }) {
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.teacherLogin({
      username: formObject.username,
      password: formObject.password,
    })
      .then((res) => {
        console.log("logged in");
        setAuthenticated(true);
        history.push("/teacher");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card teal">
      <div className="card-content">
        <p>Login</p>
        <div className="input-field">
          <input
            id="username"
            type="text"
            name="username"
            className="validate"
            onChange={handleInputChange}
          />
          <label htmlFor="username">user name</label>
        </div>
        <div className="input-field">
          <input
            id="password"
            name="password"
            type="password"
            className="validate"
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="input-field">
          <button
            className="btn waves-effect"
            type="submit"
            onClick={handleFormSubmit}
          >
            Login
          </button>
          <a
            href="/"
            className="white-text"
            onClick={(e) => {
              e.preventDefault();
              setView("register");
            }}
          >
            Or register
          </a>
        </div>
      </div>
    </div>
  );
}
