import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StudentLoginForm from "./components/StudentLoginForm";
import TeacherRegisterForm from "./components/TeacherRegisterForm";
import "./styles.css";
import TeacherLoginForm from "./components/TeacherLoginForm";

export default function Home({ setAuthenticated }) {
  const [view, setView] = useState("login");

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="vertical"></div>
        <div
          className="row"
          style={{ margin: "50vh auto", transform: "translateY(-50%)" }}
        >
          <div className="col s12 m6">
            <StudentLoginForm setAuthenticated={setAuthenticated} />
          </div>
          <div className="col s12 m6">
            {view === "login" ? (
              <TeacherLoginForm
                setView={setView}
                setAuthenticated={setAuthenticated}
              />
            ) : (
              <TeacherRegisterForm setView={setView} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
