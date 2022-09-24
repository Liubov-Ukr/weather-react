import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="todayTemp">
        {Math.round(props.temp)}{" "}
        <a href="/">
          <span className="celsius">C°</span>
        </a>
        <span className="celsius">|</span>
        <a href="/" onClick={showfahrenheit}>
          <span className="fahrenheit">F°</span>
        </a>
      </span>
    );
  } else {
    return (
      <span className="todayTemp">
        {Math.round((props.temp * 9) / 5 + 32)}{" "}
        <a href="/">
          <span className="fahrenheit">F°</span>
        </a>
        <span className="celsius">|</span>
        <a href="/" onClick={showCelsius}>
          <span className="celsius">C°</span>
        </a>
      </span>
    );
  }
}
