import "./TodayWeather.css";
export default function TodayWeather(props) {
  let weather = {
    TodayPrecipitation: "Rain",
    City: "Malmo",
    Date: "Friday 13:16",
    imgLink: "http://openweathermap.org/img/wn/10d@2x.png",
  };
  return (
    <div className="row todayWeather">
      <div className="col-sm-5 float-left">
        <img
          className="img-thumbnail"
          src={weather.imgLink}
          alt="cloudy-sunny"
        />{" "}
        <span className="todayTemp">{props.TodayTemp} °C</span>{" "}
        <span>{weather.TodayPrecipitation}</span>
      </div>
      <div className="col-sm-4">
        <span>Humidity: {props.Humidity} %</span>
        <br />
        <span>Wind: {props.Wind} km/h</span>
      </div>
      <div className="col-sm-3">
        {weather.City} <br />
        {weather.Date}
      </div>
    </div>
  );
}
