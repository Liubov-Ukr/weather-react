import Animateicon from "./Animateicon";

export default function ForecastDay(props) {
  function days() {
    let dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = new Date(props.forecast.dt * 1000);
    let days = day.getDay();
    return dayWeek[days];
  }
  function MinTemp() {
    let minTemp = Math.round(props.forecast.temp.min);
    return minTemp;
  }
  function MaxTemp() {
    let maxTemp = Math.round(props.forecast.temp.max);

    return maxTemp;
  }
  function icon() {
    let icon = props.forecast.weather[0].icon;

    return icon;
  }

  return (
    <div className="card-body card-title">
      <div className="card-title">
        <h5>{days()}</h5>
      </div>
      <div>
        <Animateicon icon={icon()} />
      </div>

      <div>
        {" "}
        <span className="maxTemp">{MaxTemp()}°</span> {MinTemp()}°{" "}
      </div>
    </div>
  );
}
