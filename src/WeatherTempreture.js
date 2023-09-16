import React from "react";

export default function WeatherTempreture() {
  return (
    <div className="d-flex weather-temperature">
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
        alt="clear"
      />
      <div>
        <strong id="temperature">17</strong>
        <span className="units">°C </span>
      </div>
    </div>
  );
}
