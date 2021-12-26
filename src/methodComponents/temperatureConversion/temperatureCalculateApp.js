import React, { useState } from "react";
import TemperatureInput from "./temperatureInput";

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const convertTemperature = (temperature, convertTo) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

function TemperatureCalculateApp(props) {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (temperature) => {
        setCelsius(temperature);
        setFahrenheit(convertTemperature(temperature, toFahrenheit));
    }

    const handleFahrenheitChange = (temperature) => {
        setFahrenheit(temperature);
        setCelsius(convertTemperature(temperature, toCelsius));
    }

    return (
        <div className="main">
        <h4>Temperature calculate App</h4>
        <TemperatureInput
            scale="Celsius"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput 
            scale="Fahrenheit"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}/>
        </div>
    );
}

export default TemperatureCalculateApp;
