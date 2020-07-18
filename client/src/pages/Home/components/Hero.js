import React from "react";
import studentsPhoto from "../../../img/studentsPhoto.png";

export default function Hero() {
  const style = {
    div: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      padding: 20,
      margin: "auto",
      background: "none",
      zIndex: 0,
    },
    image: {
      height: "auto",
      width: "80%",

      zIndex: -1,
    },
    textBig: {
      display: "block",
      color: "white",
      fontSize: "4vw",
      fontWeight: 100,
    },
    textSmall: {
      color: "white",
      fontSize: "2vw",
      fontWeight: 100,
      fontStyle: "italic",
    },
  };
  return (
    <div style={style.div}>
      <div>
        <span style={style.textBig}>Learn from home </span>
        <span style={style.textSmall}>
          Interactive remote learning platform
        </span>
      </div>
      <img
        src={studentsPhoto}
        className="image-responsive"
        style={style.image}
      ></img>
    </div>
  );
}
