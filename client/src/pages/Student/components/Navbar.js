import React, { useEffect } from "react";
import M from "materialize-css";

const style = {
  logo: { paddingLeft: 20, color: "black" },
  nav: { height: 60, backgroundColor: "#484d5c" },
  navbar: {
    background: "linear-gradient(to left, #f2edea 0%, #c0bebf 100%)",
  },
};

export default function Navbar() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="navbar-fixed">
      <nav style={style.navbar}>
        <div className=" nav-wrapper">
          <a href="/" className="brand-logo" style={style.logo}>
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
