import "./DayWeek.css";
export default function DayWeek(props) {
  let weekTemp = {
    imgLink: "http://openweathermap.org/img/wn/10d@2x.png",
  };
  return (
    <div className="col-sm">
      <div className="card-body card-title">
        <div className="card-title">
          <h5>{props.day}</h5>
        </div>
        <div>
          <img src={weekTemp.imgLink} alt="sunny" width="38" height="38" />
        </div>
        <div>
          {" "}
          <span className="maxTemp">{props.maxTemp}°</span> {props.minTemp}°{" "}
        </div>
      </div>
    </div>
  );
}
