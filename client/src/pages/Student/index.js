import React, { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Lessons from "./components/Lessons";
import Liveclass from "./components/Liveclass";
import Lesson from "./components/Lesson";
import Discussions from "./components/Discussions";
import M from "materialize-css";

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
      case "Discussions":
        return <Discussions />;
      default:
        return <Lessons showLesson={showLesson} />;
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
        className="sidenav-trigger  hide-on-large-only"
        style={{ position: "absolute", top: 5, left: 5 }}
      >
        <i className="material-icons black-text">menu</i>
      </a>
      <Sidenav setView={setView} showLesson={showLesson} />
      {renderSwitch(view)}
    </div>
  );
}
