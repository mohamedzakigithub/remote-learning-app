import React from "react";
import logo from "../img/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className=" nav-wrapper grey darken-4">
        <a href="/" className="brand-logo">
          <img src={logo} alt="Logo" />
          My Class
        </a>
        <a href="/" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
}
