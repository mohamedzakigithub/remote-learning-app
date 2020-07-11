import React, { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Lessons from "./components/Lessons";
import Liveclass from "./components/Liveclass";
import Lesson from "./components/Lesson";
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
      <Sidenav setView={setView} showLesson={showLesson} />
      {renderSwitch(view)}
    </div>
  );
}
