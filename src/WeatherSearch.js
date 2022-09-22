import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import DayWeek from "./DayWeek";
import TodayWeather from "./TodayWeather";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function ShowWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      precipitation: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
    });
  }

  function SearchWeather(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f75241acceea2bc856a6c6d4c9b0b23&units=metric`;
    axios.get(url).then(ShowWeather);
  }

  if (weather.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              className="img-thumbnail"
              alt="logo"
            />
          </div>
          <div className="col-sm-8">
            <form onSubmit={SearchWeather}>
              <div className="input-group">
                <input
                  onChange={cityChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                />
                <button className="btn btn-primary">Search</button>
                <button type="button" className="btn btn-success">
                  Currently
                </button>
              </div>
            </form>
          </div>
        </div>
        <h1>
          {weather.city}{" "}
          <span className="WeatherTemp">{Math.round(weather.temperature)}</span>
          <span>°C</span>
        </h1>
        <div className="row">
          <DayWeek />
          <DayWeek />
          <DayWeek />
          <DayWeek />
          <DayWeek />
          <DayWeek />
          <DayWeek />
        </div>
        <TodayWeather weather={weather} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
