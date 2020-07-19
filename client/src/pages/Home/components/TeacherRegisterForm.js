import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function TeacherRegisterForm({ setView }) {
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
      background: "white",
      margin: "0px auto",
      padding: 20,
    },
    form: {
      width: "80%",
    },
  };
  const [, setUserState] = useContext(UserContext);
  const [error, setError] = useState("hide");
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    if (formObject.username && formObject.password && formObject.name) {
      event.preventDefault();
      API.register({
        username: formObject.username,
        password: formObject.password,
        name: formObject.name,
        email: formObject.email,
        photo: formObject.photo,
        role: "teacher",
      })
        .then((res) => {
          if (res.data._id) {
            console.log(res);
            setUserState({
              authenticated: true,
              name: res.data.name,
              email: res.data.email,
              photo: res.data.photo,
              role: res.data.role,
            });
            history.push("/teacher");
          } else {
            console.log(res);
            setError("");
          }
        })
        .catch((err) => {
          console.log(err);
          setError("");
        });
    } else {
      setError("");
    }
  }
  return (
    <div className="card " style={style.card}>
      <h3
        className="center flow-text
        "
        style={{ padding: 0 }}
      >
        Teacher registration
      </h3>
      <div style={style.form}>
        <p
          style={{ display: "inline", padding: 5 }}
          className={`red-text black ${error}`}
        >
          Registration failed !
        </p>
        <div className="input-field ">
          <input
            id="username"
            name="username"
            type="text"
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
            id="photo"
            name="photo"
            type="text"
            onChange={handleInputChange}
            style={style.input}
          />
          <label htmlFor="photo">Photo</label>
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
        </div>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setView("TeacherLogin");
          }}
        >
          Or login
        </a>
      </div>
    </div>
  );
}
