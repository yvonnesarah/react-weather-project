import React, { useState } from "react";

export default function WeatherCurrentFeel(props) {
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
      <div className="WeatherCurrentFeel">
        Feels Like:{" "}
        <span className="WeatherCurrentFeel">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="unitFeelsLike">
          °F{" | "}
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherCurrentFeel">
        Feels Like:{" "}
        <span className="WeatherCurrentFeel">
          {Math.round(((props.fahrenheit - 32) * 5) / 9)}
        </span>
        <span className="unitFeelsLike">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
