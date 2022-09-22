import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherSearch from "./WeatherSearch";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App ard">
      <div className="container">
        <WeatherSearch defaultCity="Malmo" />
        <Footer />
      </div>
    </div>
  );
}
