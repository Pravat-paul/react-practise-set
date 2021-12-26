import React from "react";

function TemperatureInput(props) {
  //const [temperature, setTemperature] = useState("");

  const inputHandler = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {props.scale}:</legend>
      <input value={props.temperature} onChange={inputHandler} />
    </fieldset>
  );
}

export default TemperatureInput;
