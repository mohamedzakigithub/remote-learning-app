import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/dashboard";
import Liveclass from "./components/Live";
import Lesson from "./components/Lesson";
import { set } from "mongoose";

export default function Student() {
  const [view, setView] = useState("");
  const [lessonId, setLessonId] = useState("");

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
      <Navbar />
      <Sidenav setView={setView} showLesson={showLesson} />
      {renderSwitch(view)}
    </div>
  );
}
