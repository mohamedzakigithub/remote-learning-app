import React from "react";

export default function Home() {
  return (
    <div className="home container white-text">
      <div className="row">
        <div className="col s6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Student login</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <a href="/student">Student Login</a>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Teacher login</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <a href="/teacher">Teacher Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
