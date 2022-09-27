import "./TodayWeather.css";
import Animateicon from "./Animateicon";
import Temperature from "./Temperature";
import Date from "./Date";
export default function TodayWeather(props) {
  return (
    <div className="row todayWeather mt-5 ">
      <div className="col-sm-5 d-flex float-left">
        <Animateicon icon={props.weather.icon} color="#FFCA00" size={80} />

        <Temperature temp={props.weather.temperature} />
        <span className="todayprecip TWeather">
          {props.weather.precipitation}
        </span>
      </div>
      <div className="col-sm-4 TWeather ">
        <span>Humidity: {Math.round(props.weather.humidity)} %</span>
        <br />
        <span>Wind: {Math.round(props.weather.wind)} km/h</span>
      </div>
      <div className="col-sm-3 TWeather ">
        {props.weather.city} <br />
        <Date date={props.weather.date} />
      </div>
    </div>
  );
}
