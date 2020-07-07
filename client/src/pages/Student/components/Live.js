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
    <div className="row ">
      <div className="col s12 m8 offset-m2">
        <h3 className="center">Live class</h3>
        <YouTube videoId="kKOtO5tyzBU" opts={opts} />
      </div>
    </div>
  );
}
