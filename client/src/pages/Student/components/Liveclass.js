import React, { useEffect } from "react";

export default function Liveclass() {
  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: "rlms-app",
      width: "100%",
      height: "100%",
      parentNode: document.querySelector("#meetStudent"),
    };
    const api = new window.JitsiMeetExternalAPI(domain, options);
  }, []);

  return (
    <>
      <h3 className="center">Live class</h3>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div id="meetStudent" style={{ height: "70vh", width: "auto" }}></div>
        </div>
      </div>
    </>
  );
}
