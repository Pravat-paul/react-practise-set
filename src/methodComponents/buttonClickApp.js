import React, { useState } from 'react';
import '../index.css';

function ButtonClickApp() {
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    setCount(count + 1)
  }

  return (
    <div className="main">
      <h1>Welcome to React</h1>
      {count > 0 && <p>You have clicked me : {count} times.</p>}
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default ButtonClickApp;
