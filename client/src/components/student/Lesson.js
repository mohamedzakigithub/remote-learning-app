import React, { useEffect } from "react";
import M from "materialize-css";

export default function Lesson() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="row main">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s4">
            <a href="#test1">Video</a>
          </li>
          <li className="tab col s4">
            <a href="#test2">Resources</a>
          </li>
          <li className="tab col s4 ">
            <a href="#test3">Tasks</a>
          </li>
        </ul>
      </div>
      <div id="test1" className="col s12">
        Test 1
      </div>
      <div id="test2" className="col s12">
        Test 2
      </div>
      <div id="test3" className="col s12">
        Test 3
      </div>
    </div>
  );
}
