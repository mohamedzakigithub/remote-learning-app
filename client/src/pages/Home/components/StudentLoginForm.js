import React from "react";

export default function StudentLoginForm() {
  return (
    <div className="card teal">
      <div className="card-content">
        <p>Students portal</p>
        <div className="input-field">
          <input id="token" type="text" className="validate" />
          <label htmlFor="token">Token</label>
        </div>
        <div className="input-field">
          <button className="btn waves-effect" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
