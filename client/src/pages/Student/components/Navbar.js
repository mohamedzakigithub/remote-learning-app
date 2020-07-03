import React from "react";

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="white" style={{ zIndex: 1000 }}>
        <div className=" nav-wrapper">
          <a href="/" className="brand-logo black-text">
            My Class
          </a>
          <a href="/" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
}
