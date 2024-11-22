import React from "react";
import CorrectedDate from "./CorrectedDate";
import WeatherUnits from "./WeatherUnits";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="row">
        <div className="col-6">
          <h1>{props.details.city}</h1>
          <ul>
            <span>
              <li>
                <CorrectedDate date={props.details.date} />
              </li>
              <li className="text-capitalize">{props.details.description}</li>
            </span>
          </ul>
        </div>
        <div className="col-6 mt-5">
          <ul className="details">
            <li> Humidity: {props.details.humidity}%</li>
            <li> Wind: {props.details.wind} km/h</li>
            <li> Feels like: {Math.round(props.details.feels_like)}°C</li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-evenly ">
        <div >
          <img src={props.details.icon} alt={""}></img>{" "}
          <WeatherUnits celcius={props.details.temperature} />
        </div>
      </div>
    </div>
  );
}
