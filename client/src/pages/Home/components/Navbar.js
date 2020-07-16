import React from "react";

const style = {
  logo: {
    padding: "0px 20px",
    color: "black",
    fontSize: "1.5rem",
    lineHeight: "40px",
  },
  nav: { height: 40 },
};

export default function Navbar() {
  return (
    <div className="navbar-fixed" style={{ height: 40 }}>
      <nav style={style.nav}>
        <div className=" nav-wrapper">
          <a href="/" className="brand-logo" style={style.logo}>
            My Class
          </a>
        </div>
      </nav>
    </div>
  );
}
