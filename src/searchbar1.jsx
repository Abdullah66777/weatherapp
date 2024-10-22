import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import Navbar from "./Navbar";
const Searchbar1 = () => {
  const [countriesList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showWeather, setShowWeather] = useState(false); // State to control weather display

  const BASE_URL = "http://api.airvisual.com/v2";
  const API_KEY = "67e59d43-aaf8-4fdf-aa32-788cb82a1d0f";

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${BASE_URL}/countries?key=${API_KEY}`);
      const result = await response.json();
      setCountryList(result.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (country) => {
    try {
      const response = await fetch(
        `${BASE_URL}/states?country=${country}&key=${API_KEY}`
      );
      const data = await response.json();
      setStateList(data.data);
      setCityList([]); // Clear cities when a new country is selected
      setSelectedState(""); // Reset state selection
      setSelectedCity(""); // Reset city selection
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (state, country) => {
    try {
      const response = await fetch(
        `${BASE_URL}/cities?state=${state}&country=${country}&key=${API_KEY}`
      );
      const data = await response.json();
      setCityList(data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    fetchStates(country);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCity(""); // Reset city selection when state changes
    fetchCities(state, selectedCountry);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleShowWeather = () => {
    setShowWeather(true); // Show weather when the button is clicked
  };

  return (
    <body>
      <Navbar state={selectedState} city={selectedCity} />
      <div className="search">
        <div>
          <h2>Select Location</h2>
          <div>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {countriesList.map((countryObj) => (
                <option key={countryObj.country} value={countryObj.country}>
                  {countryObj.country}
                </option>
              ))}
            </select>

            <select
              value={selectedState}
              onChange={handleStateChange}
              disabled={!selectedCountry}
            >
              <option value="">Select State</option>
              {stateList.map((stateObj) => (
                <option key={stateObj.state} value={stateObj.state}>
                  {stateObj.state}
                </option>
              ))}
            </select>

            <select
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedState}
            >
              <option value="">Select City</option>
              {cityList.map((cityObj) => (
                <option key={cityObj.city} value={cityObj.city}>
                  {cityObj.city}
                </option>
              ))}
            </select>

            <button onClick={handleShowWeather} disabled={!selectedCity}>
              Show Weather
            </button>
          </div>
          {showWeather && selectedCity && (
            <Weather
              country={selectedCountry}
              state={selectedState}
              city={selectedCity}
            />
          )}
        </div>
      </div>
    </body>
  );
};

export default Searchbar1;
