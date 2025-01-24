import React, { useState } from "react";
import "./WeatherCurrentTemperature.css";

export default function WeatherCurrentTemperature(props) {
  const [unit, setUnit] = useState("imperial");
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <span className="WeatherCurrentTemperature col-8">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherCurrentTemperature col-6">
        <span className="temperature">
          {Math.round(((props.fahrenheit - 32) * 5) / 9)}
        </span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  }
}
