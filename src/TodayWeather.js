import "./TodayWeather.css";
import Animateicon from "./Animateicon";
import Temperature from "./Temperature";
import Date from "./Date";
export default function TodayWeather(props) {
  return (
    <div className="row todayWeather">
      <div className="col-sm-5 d-flex float-left">
        <Animateicon icon={props.weather.icon} />
        <Temperature temp={props.weather.temperature} />
        <span className="todayprecip">{props.weather.precipitation}</span>
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
