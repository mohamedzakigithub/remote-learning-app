import React from "react";
import { Link } from "react-router-dom";
import students from "../../../img/students.png";
import lessons from "../../../img/lessons.png";
import live_class from "../../../img/live_class.png";

export default function Dashboard({ setView }) {
  const style = {
    image: {
      textAlign: "center",
      display: "block",
      margin: "auto",
    },
    action: {
      textAlign: "center",
    },
    card: {
      border: "5px solid black",
      backgroundColor: "#c0bebf",
    },
    button: {
      backgroundColor: "#333333",
    },
  };

  return (
    <div className="dashboard">
      <h3 className="center">Teacher dashboard</h3>
      <div className="row">
        <div className="col s12 m4">
          <div className="card" style={style.card}>
            <div className="card-image ">
              <img src={lessons} className="responsive-img" alt="lessons" />
            </div>
            <div className="card-action" style={style.action}>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setView("Lessons");
                }}
                className="waves-effect waves-light btn"
                style={style.button}
              >
                Manage lessons
              </Link>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card " style={style.card}>
            <div className="card-image">
              <img src={students} className="responsive-img" alt="students" />
            </div>
            <div className="card-action" style={style.action}>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setView("Students");
                }}
                className="waves-effect waves-light btn"
                style={style.button}
              >
                Manage students
              </Link>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card" style={style.card}>
            <div className="card-image">
              <img src={live_class} className="responsive-img" alt="live" />
            </div>
            <div className="card-action" style={style.action}>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  setView("Liveclass");
                }}
                className="waves-effect waves-light btn"
                style={style.button}
              >
                Start live class
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
