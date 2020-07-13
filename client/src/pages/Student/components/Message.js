import React from "react";
import userPhotoPlaceholder from "../../../img/userPhotoPlaceholder.png";

export default function Message({ message, currUser }) {
  const style = {
    container: {
      overflow: "auto",
      display: "inline-block",
      minWidth: "40%",
      maxWidth: "80%",
      borderRadius: 5,
      padding: 10,
      margin: 10,
      clear: "both",
    },
    left: { float: "left", backgroundColor: "white" },
    right: { float: "right", backgroundColor: "#cfe9ba" },
    time: { float: "right", color: "#999", margin: 0 },
    text: { margin: 5, wordBreak: "break-all" },
    user: { marginLeft: 10 },
    photo: {
      verticalAlign: "middle",
      height: 30,
    },
  };

  return (
    <>
      <div
        style={
          message.name === currUser
            ? { ...style.container, ...style.right }
            : { ...style.container, ...style.left }
        }
      >
        <div>
          <img
            className="circle "
            style={style.photo}
            src={message.photo || userPhotoPlaceholder}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = userPhotoPlaceholder;
            }}
            alt="user"
          />
          <span style={style.user}>{message.name}</span>
        </div>
        <p style={style.text}>{message.text}</p>
        <p style={style.time}>{message.date}</p>
      </div>
      <br />
    </>
  );
}
