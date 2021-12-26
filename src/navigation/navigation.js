import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/topNavigation.css";

const Navigation = (props) => {
  return (
    <nav>
      <div className="brand">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/logo192.png"} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/buttonClick">ButtonClickApp</Link>
        </li>
        <li>
          <Link to="/toggleButton">ToggleButton</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/greeting">Greeting</Link>
        </li>
        <li>
          <Link to="/temperatureConversion">Temperature Conversion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
