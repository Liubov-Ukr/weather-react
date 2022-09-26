import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(false);
  useEffect(() => {
    setForecast(false);
  }, [props.weather]);

  function ShowForecast(response) {
    setForecast(response.data.daily);
  }

  if (forecast) {
    return (
      <div className="row">
        {forecast.map(function (loopForecast, index) {
          if (index < 7) {
            return (
              <div className="col-sm" key={index}>
                <ForecastDay forecast={loopForecast} />
              </div>
            );
          }
        })}
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
