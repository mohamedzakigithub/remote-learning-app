import React, { useState, useEffect } from "react";
import "./styles.css";
import Sidenav from "./components/Sidenav";
import Lessons from "./components/Lessons";
import Students from "./components/Students";
import Liveclass from "./components/Liveclass";
import Discussions from "./components/Discussions";
import M from "materialize-css";

export default function Teacher() {
  const [view, setView] = useState("");
  useEffect(() => {
    M.AutoInit();
  }, [view]);

  function renderSwitch(view) {
    switch (view) {
      case "Lessons":
        return <Lessons setView={setView} />;
      case "Students":
        return <Students />;
      case "Liveclass":
        return <Liveclass />;
      case "Discussions":
        return <Discussions />;
      default:
        return <Students />;
    }
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
      <Sidenav setView={setView} />
      {renderSwitch(view)}
    </div>
  );
}
