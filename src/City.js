import "./City.css";
import Temp from "./Temp";
export default function City(props) {
  let City = {
    city: "Malmo",
  };
  return (
    <div>
      <h1>
        {City.city} <Temp value={props.temp} />{" "}
      </h1>
    </div>
  );
}
