import React , { useState } from "react";
import '../index.css';

function Clock(props) {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  });
  return (
    <div className="main">
      <h1>Hello, world!</h1>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
