import React, { useState } from "react";
import "../index.css";

function ToggleButton() {
  const [isToggle, setisToggle] = useState(true);

  const toggleButtonHandler = () => {
      setisToggle(!isToggle);
  }
  return (
    <div className="main">
      <h4>Toggle button example using method component.</h4>
      <button onClick={toggleButtonHandler}>{isToggle ? "ON" : "OFF"}</button>
    </div>
  );
}

export default ToggleButton;
