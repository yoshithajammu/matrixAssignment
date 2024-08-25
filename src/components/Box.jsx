import React from "react";

const Box = ({ color, onClick }) => {
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

export default Box;
