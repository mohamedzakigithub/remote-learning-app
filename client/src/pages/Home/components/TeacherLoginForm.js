import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function TeacherLoginForm({ setView }) {
  const style = {
    button: {
      color: "white",
      backgroundColor: "#0667d8",
      width: "100%",
    },
    card: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: 20,
      border: "2px solid black",
      background: "none",
    },
    form: {
      padding: 10,
      width: "80%",
    },
  };
  const [, setUserState] = useContext(UserContext);
  const [formObject, setFormObject] = useState({});
  const [error, setError] = useState("hide");
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
      .catch((err) => {
        console.log(err);
        setError("");
      });
  }
  return (
    <div className="card transparent" style={style.card}>
      <h3
        className="center black-text flow-text
        "
      >
        Teacher portal
      </h3>
      <div style={style.form}>
        <a
          style={{ display: "block" }}
          href="/"
          className="black-text "
          onClick={(e) => {
            e.preventDefault();
            setView("StudentsLogin");
          }}
        >
          {"<< Back to students portal"}
        </a>
        <p
          style={{ display: "inline", padding: 5 }}
          className={`red-text black ${error}`}
        >
          Wrong credentials!
        </p>
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
          className="black-text "
          onClick={(e) => {
            e.preventDefault();
            setView("TeacherRegister");
          }}
        >
          or register
        </a>
      </div>
    </div>
  );
}
