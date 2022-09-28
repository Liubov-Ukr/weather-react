import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setForecast(false);
  }, [props.weather]);

  function ShowForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="row mt-5">
        {forecast.map(function (loopForecast, index) {
          if (index < 7) {
            return (
              <div className="col-sm" key={index}>
                <ForecastDay forecast={loopForecast} />
              </div>
            );
          } else {
            return null;
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
