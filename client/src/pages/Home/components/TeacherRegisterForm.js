import React, { useState } from "react";
import API from "../../../utils/API";

export default function TeacherRegisterForm({ setView }) {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.teacherRegister({
      username: formObject.username,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card teal">
      <div className="card-content">
        <p>Register</p>
        <div className="input-field">
          <input
            id="username"
            name="username"
            type="text"
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
            Register
          </button>
          <a
            href="/"
            className="white-text"
            onClick={(e) => {
              e.preventDefault();
              setView("login");
            }}
          >
            Or Login
          </a>
        </div>
      </div>
    </div>
  );
}
