import React from "react";
import { useState, useEffect } from "react";
import App from "./App";
import Home from "./Home";
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
      <h2>
        Weather Data for {city}, {state}, {country}
      </h2>
      {weatherData ? (
        <div>
          <h3>Current Weather:</h3>
          <p>Temperature: {weatherData.current.weather.tp}°C</p>
          <p>Pressure: {weatherData.current.weather.pr} hPa</p>
          <p>Humidity: {weatherData.current.weather.hu}%</p>
          <p>Wind Speed: {weatherData.current.weather.ws} m/s</p>
          <p>Wind Direction: {weatherData.current.weather.wd}°</p>
          <p>Weather Icon Code: {weatherData.current.weather.ic}</p>

          <div>
            <h3>Pollution Data:</h3>
            <p>AQI US: {weatherData.current.pollution.aqius}</p>
            <p>Main Pollutant US AQI: {weatherData.current.pollution.mainus}</p>
            <p>AQI CN: {weatherData.current.pollution.aqicn}</p>
            <p>
              Main Pollutant Chinese AQI: {weatherData.current.pollution.maincn}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Weather;
