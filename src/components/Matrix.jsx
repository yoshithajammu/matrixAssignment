import React, { useState } from "react";
import Box from "./Box";
import "../App.css";

const Matrix = () => {
  const [clickOrder, setClickOrder] = useState([]);
  const [boxColors, setBoxColors] = useState(Array(9).fill("white"));

  const handleClick = (index) => {
    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    if (newClickOrder.length < 9) {
      const newBoxColors = [...boxColors];
      newBoxColors[index] = "green";
      setBoxColors(newBoxColors);
    } else {
      const newBoxColors = Array(9).fill("white");
      newClickOrder.forEach((clickIndex, i) => {
        setTimeout(() => {
          newBoxColors[clickIndex] = "orange";
          setBoxColors([...newBoxColors]);
        }, i * 200);
      });
    }
  };

  return (
    <div className="matrix">
      {boxColors.map((color, index) => (
        <Box key={index} color={color} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Matrix;
