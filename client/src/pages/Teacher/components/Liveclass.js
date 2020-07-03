import React from "react";
import YouTube from "react-youtube";

export default function Live() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <YouTube videoId="kKOtO5tyzBU" opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
}
