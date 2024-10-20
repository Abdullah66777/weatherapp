import React from "react";
import { useState, useEffect } from "react";
const Weather = ({ city, state, country }) => {
  const [weatherData, setWeatherData] = useState(null);
  const BASE_URL = "http://api.airvisual.com/v2"; // Base URL only
  const API_KEY = "67e59d43-aaf8-4fdf-aa32-788cb82a1d0f";
  const fetchWeatherInfo = async () => {
    if (city && state && country) {
      try {
        const response = await fetch(
          `${BASE_URL}/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data); // Handle the fetched data as needed
        setWeatherData(data.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };
  useEffect(() => {
    //transfer thsi to home component when complete
    console.log("1");
    console.log("a");
    fetchWeatherInfo();
    console.log("b");
    console.log("c");
  }, [city, state, country]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "25px",
        }}
      >
        <h2>
          Weather Data for {city}, {state}, {country}
        </h2>
      </div>

      {weatherData ? (
        <div>
          <div className="weather-container">
            <div className="header">
              <h2>Current Weather:</h2>
              <p>{new Date(weatherData.current.weather.ts).toLocaleString()}</p>
            </div>

            <div className="weather-details">
              <div className="temp-icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.current.weather.ic}@4x.png`}
                  alt="Weather Icon"
                  style={{ width: "150px", height: "150px" }}
                />
                <h2 style={{ fontSize: "42px", fontWeight: "bold" }}>
                  {weatherData.current.weather.tp}°C
                </h2>
              </div>
              <div className="additional-info">
                <p>Wind Speed: {weatherData.current.weather.ws} m/s</p>
                <p>Wind Direction: {weatherData.current.weather.wd}°</p>
                <p>Humidity: {weatherData.current.weather.hu}%</p>
                <p>Pressure: {weatherData.current.weather.pr} hPa</p>
              </div>
            </div>
          </div>
          <div className="weather-container">
            <h2
              style={{
                borderBottom: "1px solid lightgray",
                paddingBottom: "5px",
              }}
            >
              Pollution Data:
            </h2>
            <div style={{ paddingLeft: "30px" }}>
              <p>AQI US: {weatherData.current.pollution.aqius}</p>
              <p>
                Main Pollutant US AQI: {weatherData.current.pollution.mainus}
              </p>
              <p>AQI CN: {weatherData.current.pollution.aqicn}</p>
              <p>
                Main Pollutant Chinese AQI:{" "}
                {weatherData.current.pollution.maincn}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Weather;
