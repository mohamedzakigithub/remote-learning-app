import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function TeacherLoginForm({ setView }) {
  const style = {
    input: { color: "white" },
    button: {
      color: "white",
      backgroundColor: "#0667d8",
      width: "100%",
    },
    card: {
      borderRadius: 20,
      border: "2px solid white",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      padding: 10,
      width: "80%",
    },
  };
  const [, setUserState] = useContext(UserContext);
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.login({
      username: formObject.username,
      password: formObject.password,
    })
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          photo: res.data.photo,
          role: res.data.role,
        });
        history.push("/teacher");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card transparent" style={style.card}>
      <h3
        className="center white-text flow-text
        "
      >
        Teacher portal
      </h3>
      <div style={style.form}>
        <div className="input-field ">
          <input
            id="username"
            type="text"
            name="username"
            className="validate"
            onChange={handleInputChange}
            style={style.input}
          />
          <label htmlFor="username">User name</label>
        </div>
        <div className="input-field ">
          <input
            id="password"
            name="password"
            type="password"
            className="validate"
            onChange={handleInputChange}
            style={style.input}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="input-field ">
          <button
            className="btn waves-effect"
            type="submit"
            onClick={handleFormSubmit}
            style={style.button}
          >
            Login
          </button>
        </div>
        <a
          href="/"
          className="white-text "
          onClick={(e) => {
            e.preventDefault();
            setView("register");
          }}
        >
          Or register
        </a>
      </div>
    </div>
  );
}
