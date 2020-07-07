import React, { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/dashboard";
import Liveclass from "./components/Live";
import Lesson from "./components/Lesson";
import M from "materialize-css";
import { set } from "mongoose";

export default function Student() {
  const [view, setView] = useState("");
  const [lessonId, setLessonId] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  function renderSwitch(view) {
    switch (view) {
      case "Lesson":
        return <Lesson lessonId={lessonId} />;
      case "Liveclass":
        return <Liveclass />;
      default:
        return <Dashboard showLesson={showLesson} />;
    }
  }
  function showLesson(id) {
    setLessonId(id);
    setView("Lesson");
  }
  return (
    <div className="main">
      <a
        href="/"
        data-target="slide-out"
        className="sidenav-trigger black-text"
      >
        <i className="material-icons">menu</i>
      </a>
      <Sidenav setView={setView} showLesson={showLesson} />
      {renderSwitch(view)}
    </div>
  );
}
