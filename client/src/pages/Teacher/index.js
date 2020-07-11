import React, { useState, useEffect } from "react";
import "./styles.css";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Lessons from "./components/Lessons";
import Students from "./components/Students";
import Liveclass from "./components/Liveclass";
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
      default:
        return <Dashboard setView={setView} />;
    }
  }

  return (
    <div className="main">
      <a
        href="/"
        data-target="slide-out"
        className="sidenav-trigger hide-on-large-only"
      >
        <i className="material-icons black-text">menu</i>
      </a>
      <Sidenav setView={setView} />
      {renderSwitch(view)}
    </div>
  );
}
