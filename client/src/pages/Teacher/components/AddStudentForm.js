import React, { useState } from "react";
import API from "../../../utils/API";

export default function AddStudentForm({ showList }) {
  const style = {
    form: {
      padding: 10,
      backgroundColor: "white",
      border: "1px solid black",
    },
  };

  const [formObject, setFormObject] = useState({});

  function generateToken() {
    return Math.random().toString(36).substring(3);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formObject.name) {
      API.register({
        username: generateToken(),
        password: "xyz",
        name: formObject.name,
        email: formObject.email,
        photo: formObject.photo,
        role: "student",
      })
        .then((res) => {
          console.log("saved");
          showList();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="row">
      <div className="col s10 m8 offset-s1 offset-m2" style={style.form}>
        <form className="new-student ">
          <div className="input-field col s12 m8 ">
            <input name="name" type="text" onChange={handleInputChange} />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-field col s12 m8 ">
            <input name="email" type="text" onChange={handleInputChange} />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field col s12 m8 ">
            <input name="photo" type="text" onChange={handleInputChange} />
            <label htmlFor="photo">Photo</label>
          </div>

          <div className="input-field col s12 right-align">
            <a
              href="/"
              className="btn-save btn blue"
              onClick={handleFormSubmit}
            >
              Save
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
