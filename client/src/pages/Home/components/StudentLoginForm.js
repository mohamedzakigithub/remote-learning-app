import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";

export default function StudentLoginForm({ setAuthenticated }) {
  const style = {
    input: {
      borderRadius: 20,
      color: "black",
      backgroundColor: "white",
      height: 30,
      paddingLeft: 5,
    },
    button: {
      borderRadius: 20,
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
      right: 0,
      padding: 10,
      width: "100%",
    },
  };

  const [userState, setUserState] = useContext(UserContext);
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
        <h3
          className="center white-text
        "
        >
          Students portal
        </h3>
        <div style={style.form}>
          <div>
            <input
              style={style.input}
              id="token"
              type="text"
              name="username"
              className="validate"
              onChange={handleInputChange}
            />
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
