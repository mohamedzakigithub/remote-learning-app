import React from "react";
import { Link } from "react-router-dom";
import students from "../../../img/students.png";
import lessons from "../../../img/lessons.png";
import live_class from "../../../img/live_class.png";

export default function Dashboard({ setView }) {
  return (
    <>
      <h3 className="center">Teacher dashboard</h3>
      <div className="row">
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image ">
              <img src={lessons} className="responsive-img" />
            </div>
            <div className="card-action">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setView("Lessons");
                }}
                className="waves-effect waves-light btn"
              >
                Manage lessons
              </Link>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image">
              <img src={students} />
            </div>
            <div className="card-action">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setView("Students");
                }}
                className="waves-effect waves-light btn"
              >
                Manage students
              </Link>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image">
              <img src={live_class} />
            </div>
            <div className="card-action">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setView("Liveclass");
                }}
                className="waves-effect waves-light btn"
              >
                Start live class
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
