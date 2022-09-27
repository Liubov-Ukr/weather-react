import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <span className="todayTemp">
      {Math.round(props.temp)} <span className="celsius">C°</span>
      <span className="celsius"></span>
    </span>
  );
}
