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
      height: "calc(100% - 60px)",
      width: "80vw",
      marginLeft: "10vw",
    },
  };

  const [, setUserState] = useContext(UserContext);
  let history = useHistory();
  const [view, setView] = useState("StudentLogin");

  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          photo: res.data.photo,
          role: res.data.role,
          teacher: res.data.teacher,
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
        return <StudentLoginForm />;
      case "TeacherLogin":
        return <TeacherLoginForm setView={setView} />;
      case "TeacherRegister":
        return <TeacherRegisterForm setView={setView} />;
      default:
        return <StudentLoginForm />;
    }
  }

  return (
    <div className="home">
      <Navbar view={view} setView={setView} />
      <div style={style.container}>
        <div
          className="row "
          style={{
            display: "flex",
            height: "90%",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="col colHome s12 m8" style={{ height: "100%" }}>
            <Hero />
          </div>

          <div className="col colHome s12 m4 l4">{renderSwitch(view)}</div>
        </div>
      </div>
    </div>
  );
}
