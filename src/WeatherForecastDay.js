import React from "react";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function description() {
    let description = props.data.condition.description;
    return description;
  }

  function iconUrl() {
    let iconUrl = props.data.condition.icon_url;
    return iconUrl;
  }

  return (
    <div className="WeatherForecastDaily col space-evenly">
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={iconUrl()}
        alt={description()}
        className="WeatherForecast-icon"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          <strong>{maxTemperature()}</strong>
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
