import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function StudentLoginForm({ setAuthenticated }) {
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
      password: "xyz",
    })
      .then((res) => {
        console.log("logged in");
        setAuthenticated(true);
        history.push("/student");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card whit">
      <div className="card-content">
        <p>Student Login</p>
        <div className="input-field">
          <input
            id="token"
            type="text"
            name="username"
            className="validate"
            onChange={handleInputChange}
          />
          <label htmlFor="token">Token</label>
        </div>
        <div className="input-field">
          <button
            className="btn waves-effect"
            type="submit"
            onClick={handleFormSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
