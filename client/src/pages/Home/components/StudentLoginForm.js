import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function StudentLoginForm({ setView }) {
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
      password: "xyz",
    })
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          photo: res.data.photo,
          role: res.data.role,
          teacher: res.data.teacher,
        });
        history.push("/student");
      })
      .catch((err) => {
        console.log(err);
        setError("");
      });
  }
  return (
    <div className="card" style={style.card}>
      <h3
        className="center flow-text
        "
        style={{ padding: 0 }}
      >
        Students portal
      </h3>
      <div style={style.form}>
        <p
          style={{ display: "inline", padding: 5 }}
          className={`red-text black ${error}`}
        >
          Wrong credentials!
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <input
              id="token"
              type="text"
              name="username"
              onChange={handleInputChange}
              style={style.input}
            />
            <label htmlFor="token">Token</label>
          </div>
          <div className="input-field" style={{ margin: "0px auto" }}>
            <button
              className="btn waves-effect"
              type="submit"
              onClick={handleFormSubmit}
              style={style.button}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
