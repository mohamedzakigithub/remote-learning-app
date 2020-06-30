import React from "react";

export default function Navbar() {
  return (
    <nav className="transparent" style={{ zIndex: 1000 }}>
      <div className=" nav-wrapper">
        <a href="/" className="brand-logo black-text">
          My Class
        </a>
        <a href="/" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
}
