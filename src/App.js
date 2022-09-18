import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import City from "./City";
import DayWeek from "./DayWeek";
import TodayWeather from "./TodayWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App container ard">
      <Header />
      <City temp={25} />
      <div className="row">
        <DayWeek day="Fri" minTemp={16} maxTemp={20} />
        <DayWeek day="Sun" minTemp={18} maxTemp={24} />
        <DayWeek day="Sat" minTemp={14} maxTemp={18} />
        <DayWeek day="Mon" minTemp={17} maxTemp={28} />
        <DayWeek day="Tue" minTemp={10} maxTemp={18} />
        <DayWeek day="Wed" minTemp={16} maxTemp={22} />
        <DayWeek day="Thu" minTemp={17} maxTemp={20} />
      </div>

      <TodayWeather TodayTemp={20} Humidity={97} Wind={2} />
      <Footer />
    </div>
  );
}
