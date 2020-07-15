import React from "react";

export default function Hero() {
  const style = {
    card: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      padding: 20,
      margin: "auto",
      background: "none",
    },
    textBig: {
      fontSize: "4vw",
      fontWeight: 800,
    },
    textSmall: {
      fontSize: "2vw",
      fontWeight: 400,
    },
  };
  return (
    <div className="card " style={style.card}>
      <div>
        <h1 style={style.textBig} className="flow-text">
          Learn from home today
        </h1>
        <p style={style.textSmall}>Interactive remote learning platform</p>
      </div>
    </div>
  );
}
