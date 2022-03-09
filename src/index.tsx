import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9iZXJ0Y2FzdDEyIiwiYSI6ImNremp5ZHdmNTF5OG8ybm9iZ2E1bGFhODAifQ.4gKPVXpglB0fZOIE7YEI1A";

if (!navigator.geolocation) {
  alert("Tu navegador no soporta la geolocalizacion");
  throw new Error("Tu navegador no soporta la geolocalizacion");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
