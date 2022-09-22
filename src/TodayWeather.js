import "./TodayWeather.css";
import Date from "./Date";
export default function TodayWeather(props) {
  return (
    <div className="row todayWeather">
      <div className="col-sm-5 float-left">
        <img
          className="img-thumbnail"
          src={props.weather.icon}
          alt="cloudy-sunny"
        />{" "}
        <span className="todayTemp">
          {Math.round(props.weather.temperature)} °C
        </span>{" "}
        <span>{props.weather.precipitation}</span>
      </div>
      <div className="col-sm-4">
        <span>Humidity: {Math.round(props.weather.humidity)} %</span>
        <br />
        <span>Wind: {Math.round(props.weather.wind)} km/h</span>
      </div>
      <div className="col-sm-3">
        {props.weather.city} <br />
        <Date date={props.weather.date} />
   
      </div>
    </div>
  );
}
