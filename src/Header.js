import "./Header.css";
import Search from "./Search";
export default function Header() {
  return (
    <div className="row Header">
      <div className="col-sm-3">
        <a href="#">
          <img
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            className="img-thumbnail"
            alt="logo"
          />
        </a>
      </div>
      <Search />
    </div>
  );
}
