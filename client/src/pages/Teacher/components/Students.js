import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import M from "materialize-css";
import userPhotoPlaceholder from "../../../img/userPhotoPlaceholder.png";
import add from "../../../img/add.png";
import AddStudentForm from "./AddStudentForm";
import seedUsers from "../../../utils/seedUsers";

//seedUsers();

const style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    height: "auto",
    width: 250,
    backgroundColor: "white",
    borderRadius: 5,
    border: "1px solid black",
    margin: 10,
    padding: 10,
  },
  img: {
    display: "block",
    margin: "auto",
    height: 70,
    width: 70,
    borderRadius: "50%",
  },
  add: {
    display: "block",
    margin: "auto",
    height: 150,
    width: "auto",
  },
  center: {
    textAlign: "center",
    padding: 10,
  },
  text: {
    fontSize: 12,
    margin: "10px, 0px",
  },
  button: { backgroundColor: "#0667d8" },
};

export default function Students() {
  const [students, setStudents] = useState([]);
  const [hideList, setHideList] = useState("");
  const [hideForm, setHideForm] = useState("hide");

  useEffect(() => {
    // seedUsers();
    M.AutoInit();
    loadStudents();
  }, [hideList]);

  function showForm() {
    setHideForm("");
    setHideList("hide");
  }

  function showList() {
    setHideForm("hide");
    setHideList("");
  }

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
      <div className={`${hideForm}`}>
        <h3 className="center">Add a student</h3>
        <AddStudentForm showList={showList} />
      </div>

      <div className={`row ${hideList} `}>
        <h3 className="center">Manage students</h3>
        <div className="col s12" style={style.container}>
          <div style={style.card}>
            <div>
              <img src={add} style={style.add} alt="add" />
            </div>
            <div style={style.center}>
              <button onClick={showForm} className="btn" style={style.button}>
                Add student
              </button>
            </div>
          </div>

          {students.length
            ? students.map((student) => (
                <div style={style.card} key={student._id}>
                  <img
                    src={student.photo || userPhotoPlaceholder}
                    style={style.img}
                    alt="profile"
                  />
                  <div>
                    <p style={style.text}>{student.name}</p>
                    <p style={style.text}>{student.email}</p>
                    <p style={style.text}>Token: {student.username}</p>
                  </div>
                  <div>
                    <a href="/" onClick={(e) => e.preventDefault()}>
                      <i
                        className="material-icons right red-text"
                        onClick={() => deleteStudent(student._id)}
                      >
                        delete
                      </i>
                    </a>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
