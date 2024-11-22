import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDetails">
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <img src={props.data.condition.icon_url} alt={""}></img>
      </div>
      <div className="ForecastTemperatures">
        <span className="ForecastTemperatureMax">
          {" "}
          {Math.round(props.data.temperature.maximum)}°C
        </span>
        <br />
        <span className="ForecastTemperatureMin">
          {Math.round(props.data.temperature.minimum)}°C{" "}
        </span>
      </div>
    </div>
  );
}
