import React from "react";

const style = {
  logo: { paddingLeft: 20, color: "#ffce00" },
  nav: { height: 60, backgroundColor: "#484d5c" },
};

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="transparent" style={style.nav}>
        <div className=" nav-wrapper">
          <a href="/" className="brand-logo" style={style.logo}>
            My Class
          </a>
        </div>
      </nav>
    </div>
  );
}
