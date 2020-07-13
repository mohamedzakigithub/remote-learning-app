import React, { useState, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import StudentLoginForm from "./components/StudentLoginForm";
import TeacherRegisterForm from "./components/TeacherRegisterForm";
import "./styles.css";
import TeacherLoginForm from "./components/TeacherLoginForm";
import { UserContext } from "../../utils/UserContext";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

export default function Home() {
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

  return (
    <div className="home">
      <Navbar />
      <div className="vertical"></div>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            height: "80vh",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="col s12 m6">
            <StudentLoginForm />
          </div>
          <div className="col s12 m6">
            {view === "login" ? (
              <TeacherLoginForm setView={setView} />
            ) : (
              <TeacherRegisterForm setView={setView} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
