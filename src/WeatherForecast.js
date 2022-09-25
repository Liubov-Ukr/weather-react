import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(false);

  function ShowForecast(response) {
    setForecast(response.data.daily);
  }
  console.log(forecast);
  if (forecast) {
    return (
      <div className="col-sm">
        <ForecastDay forecast={forecast} />
      </div>
    );
  } else {
    let lat = props.weather.lat;
    let lon = props.weather.lon;
    let APIkey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIkey}&units=metric`;
    axios.get(url).then(ShowForecast);
    return null;
  }
}
