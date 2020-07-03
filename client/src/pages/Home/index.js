import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="container white-text">
        <div class="vertical"></div>
        <div
          className="row"
          style={{ margin: "50vh auto", transform: "translateY(-50%)" }}
        >
          <div className="col s12 m6">
            <div
              className="card "
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <div className="card-content">
                <p>Students portal</p>
                <div className="input-field">
                  <input id="token" type="text" className="validate" />
                  <label htmlFor="token">Token</label>
                </div>
                <div class="input-field">
                  <button class="btn waves-effect  " type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div
              className="card "
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <div className="card-content">
                <p>Teacher dashboard</p>
                <div className="input-field">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
                <div class="input-field">
                  <button class="btn waves-effect " type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
