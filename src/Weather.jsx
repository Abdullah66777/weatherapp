import React from "react";
import { useEffect } from "react";
import App from "./App";
const Weather = () => {
  const BASE_URL = "http://api.airvisual.com/v2"; // Base URL only
  const API_KEY = "67e59d43-aaf8-4fdf-aa32-788cb82a1d0f";
  const fetchWeatherInfo = async (city, state, country) => {
    const response = await fetch(
      `${BASE_URL}/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
    );
    const data3 = await response.json();
    console.log(data3);
  };
  useEffect(() => {
    //transfer thsi to home component when complete
    console.log("1");
    console.log("a");
    // fetchWeatherInfo("Los Angeles", "California", "USA");
    console.log("b");
    console.log("c");
  }, []);
};
export default Weather;
