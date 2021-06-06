import React from "react";
import "./Exceeds.css";

const Exceeds = (props) => {
  return Math.abs(props.speed) > 60 ? (
    <p className="exceeds">Зафиксировано превышение скорости</p>
  ) : (
    <p className="normal">Скорость в пределах нормы</p>
  );
};

export default Exceeds;
