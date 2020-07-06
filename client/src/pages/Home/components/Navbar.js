import React, { useEffect } from "react";
import M from "materialize-css";

const style = {
  logo: { paddingLeft: 20, color: "#ffce00" },
  nav: { height: 60, backgroundColor: "#484d5c" },
};

export default function Navbar() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="navbar-fixed">
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
