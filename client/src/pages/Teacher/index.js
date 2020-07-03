import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Lessons from "./components/Lessons";
import Students from "./components/Students";
import Liveclass from "./components/Liveclass";

export default function Teacher() {
  const [view, setView] = useState("");

  function renderSwitch(view) {
    switch (view) {
      case "Lessons":
        return <Lessons />;
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
      <Navbar />
      <Sidenav setView={setView} />
      {renderSwitch(view)}
    </div>
  );
}
