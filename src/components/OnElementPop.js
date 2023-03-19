import React from "react";

const OnElementPop = ({
  left,
  right,
  top,
  bottom,
  width,
  height,
  background,
  color,
  text
}) => {
  return (
    <div
      className="bubble-right"
      style={{
        position: "absolute",
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        width: width,
        height: height,
        background: background,
        color: color,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <p style={{ color: "white" }} className="popular-products-title">
        {text}
      </p>
    </div>
  );
};

export default OnElementPop;
