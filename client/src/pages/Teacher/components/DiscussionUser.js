import React from "react";
import userPhotoPlaceholder from "../../../img/userPhotoPlaceholder.png";

export default function DiscussionUser({ user }) {
  const style = {
    container: {
      width: "99%",
      backgroundColor: "white",
      padding: 5,
      margin: "5px 0px",
    },
    user: { marginLeft: 5 },
    photo: {
      verticalAlign: "middle",
      height: 20,
    },
  };

  return (
    <>
      <div style={style.container}>
        <div>
          <img
            className="circle "
            style={style.photo}
            src={user.photo || userPhotoPlaceholder}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = userPhotoPlaceholder;
            }}
            alt="user"
          />
          <span style={style.user}>{user.name.replace(/ .*/, "")}</span>
        </div>
      </div>
    </>
  );
}
