import React from "react";
import Sidenav from "../components/student/Sidenav";
import Announcements from "../components/student/Announcements";

export default function Student() {
  return (
    <>
      <Sidenav />
      <div className="main">
        <Announcements />
      </div>
    </>
  );
}
