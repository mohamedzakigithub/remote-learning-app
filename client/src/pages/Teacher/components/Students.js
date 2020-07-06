import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import M from "materialize-css";
import picture from "../../../img/user-placeholder.png";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    M.AutoInit();
    loadStudents();
  }, []);

  function loadStudents() {
    API.getStudents()
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteStudent(id) {
    API.deleteStudent(id)
      .then((res) => loadStudents())
      .catch((err) => console.log(err));
  }
  return (
    <div className="students">
      <h3 className="center">Manage Students</h3>
      <div className="row">
        <div
          className="col s12"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="card grey" style={{ height: 200, width: 200 }}>
            Add student
          </div>

          {students.length ? (
            students.map((student) => (
              <div className="card" style={{ height: 200, width: 200 }}>
                <div className="card-image">
                  <img
                    className=" "
                    src={picture}
                    style={{ height: 70, width: 70, borderRadius: "50%" }}
                  />
                </div>
                <div className="card-content">
                  <p>Name: {student.username}</p>
                  <p>Email: {student.email}</p>
                </div>
                <div className="card-action">
                  <button className="right">
                    <i
                      className="material-icons right red-text"
                      onClick={deleteStudent}
                    >
                      delete
                    </i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h5 className="collection-item">No students found</h5>
          )}
        </div>
      </div>
    </div>
  );
}
