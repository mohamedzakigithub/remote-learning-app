import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function TeacherRegisterForm({ setView }) {
  const style = {
    input: { color: "white" },
    button: {
      border: "0px solid black",
      color: "white",
      backgroundColor: "#0667d8",
      height: 30,
      width: "100%",
      padding: "0 10px ",
    },
    card: {
      borderRadius: 20,
      border: "2px solid white",
      height: "80vh",
    },
    form: {
      display: "inline-block",
      position: "absolute",
      bottom: 30,
      right: "10%",
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
    API.register({
      username: formObject.username,
      password: formObject.password,
      name: formObject.name,
      email: formObject.email,
      picture: formObject.picture,
      role: "teacher",
    })
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture,
          role: res.data.role,
        });
        history.push("/teacher");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card transparent" style={style.card}>
      <div className="card-content">
        <h3
          className="center white-text
        "
        >
          Teacher registration
        </h3>
        <div style={style.form}>
          <div className="input-field">
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleInputChange}
              style={style.input}
            />
            <label htmlFor="username">User name</label>
          </div>
          <div className="input-field">
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleInputChange}
              style={style.input}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              style={style.input}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              id="email"
              name="email"
              type="text"
              onChange={handleInputChange}
              style={style.input}
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field">
            <input
              id="picture"
              name="picture"
              type="text"
              onChange={handleInputChange}
              style={style.input}
            />
            <label htmlFor="picture">Picture</label>
          </div>
          <div className="input-field">
            <button
              className="btn waves-effect"
              type="submit"
              onClick={handleFormSubmit}
              style={style.button}
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
    </div>
  );
}
