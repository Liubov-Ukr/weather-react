import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  return (
    <span className="todayTemp">
      {Math.round(props.temp)} <span className="celsius">C°</span>
      <span className="celsius"></span>
    </span>
  );
}
