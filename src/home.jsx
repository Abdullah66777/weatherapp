import React from "react";
import { useState } from "react";
import Weather from "./Weather";
const Home = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const handleSearch = () => {
    setShowWeather(true);
  };
  return (
    <body>
      <div className="search">
        <div>
          Enter location :
          <input
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div>
        {showWeather && <Weather country={country} state={state} city={city} />}
      </div>
    </body>
  );
};

export default Home;
