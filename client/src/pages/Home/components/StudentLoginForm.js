import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function StudentLoginForm({ setAuthenticated }) {
  const style = {
    input: { color: "white" },
    button: {
      border: "0px solid black",
      color: "white",
      backgroundColor: "#0667d8",
      height: 30,

      width: "100%",
    },
    card: {
      borderRadius: 20,
      border: "2px solid white",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
    API.login({
      username: formObject.username,
      password: "xyz",
    })
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture,
          role: res.data.role,
        });
        history.push("/student");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card transparent" style={style.card}>
      <div className="card-content">
        <h1
          className="center white-text flow-text
        "
        >
          Students portal
        </h1>
        <div style={style.form}>
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
          <div>
            <button
              className="btn waves-effect"
              type="submit"
              onClick={handleFormSubmit}
              style={style.button}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
