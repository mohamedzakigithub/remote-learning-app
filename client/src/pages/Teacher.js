import React from "react";
import { Link } from "react-router-dom";
export default function Teacher() {
  return (
    <div className="row teacher">
      <div className="col s12 m4">
        <Link to="/teacher/lessons">Manage lessons</Link>
      </div>
      <div className="col s12 m4">
        <Link to="/teacher/students">Manage students</Link>
      </div>
      <div className="col s12 m4">
        <Link to="/teacher/students">Live class</Link>
      </div>
    </div>
  );
}
