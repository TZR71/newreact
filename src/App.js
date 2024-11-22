import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Palermo" />
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/TZR71"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiina Rojola{" "}
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/TZR71/newreact"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weather-tr.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
