import Animateicon from "./Animateicon";

export default function ForecastDay(props) {
  function days() {
    let dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = new Date(props.forecast[0].dt * 1000);
    let days = day.getDay();
    return dayWeek[days];
  }
  function MinTemp() {
    let minTemp = Math.round(props.forecast[0].temp.min);
    return minTemp;
  }
  function MaxTemp() {
    let maxTemp = Math.round(props.forecast[0].temp.max);

    return maxTemp;
  }
  return (
    <div className="card-body card-title">
      <div className="card-title">
        <h5>{days()}</h5>
      </div>
      <div>
        <Animateicon icon={props.forecast[0].weather[0].icon} />
      </div>
      <div>
        {" "}
        <span className="maxTemp">{MaxTemp()}°</span> {MinTemp()}°{" "}
      </div>
    </div>
  );
}
