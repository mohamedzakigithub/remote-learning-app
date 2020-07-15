import React, { useState, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import StudentLoginForm from "./components/StudentLoginForm";
import TeacherRegisterForm from "./components/TeacherRegisterForm";
import "./styles.css";
import TeacherLoginForm from "./components/TeacherLoginForm";
import { UserContext } from "../../utils/UserContext";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import Hero from "./components/Hero";

export default function Home() {
  const style = {
    container: {
      borderRadius: 20,
      height: "85vh",
      width: "90vw",
      marginLeft: "5vw",
      marginTop: 20,
      overflow: "auto",
    },
  };

  const [, setUserState] = useContext(UserContext);
  let history = useHistory();
  const [view, setView] = useState("login");

  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          photo: res.data.photo,
          role: res.data.role,
        });
        if (res.data.role === "teacher") {
          history.push("/teacher");
        } else if (res.data.role === "student") {
          history.push("/student");
        }
      })
      .catch((err) => console.log(err));
  });

  function renderSwitch(view) {
    switch (view) {
      case "StudentLogin":
        return <StudentLoginForm setView={setView} />;
      case "TeacherLogin":
        return <TeacherLoginForm setView={setView} />;
      case "TeacherRegister":
        return <TeacherRegisterForm setView={setView} />;
      default:
        return <StudentLoginForm setView={setView} />;
    }
  }

  return (
    <div className="home">
      <Navbar />
      <div style={style.container} className="transparent">
        <div
          className="row "
          style={{
            display: "flex",
            height: "80vh",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="col s12 m6 l8 hide-on-small-only">
            <Hero />
          </div>
          <div className="col s12 m6 l4">{renderSwitch(view)}</div>
        </div>
      </div>
    </div>
  );
}
