import "./Header.css";
import Search from "./Search";
export default function Header() {
  return (
    <div className="row Header">
      <div className="col-sm-3">
        <a href="#">
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/weather-ios-logo.png"
            class="img-thumbnail"
            alt="logo"
          />
        </a>
      </div>
      <Search />
    </div>
  );
}
