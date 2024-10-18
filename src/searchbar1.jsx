import React from "react";
import { useState, useEffect } from "react";

const searchbar1 = () => {
  const [countriesList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citylist, setCityList] = useState([]);
  const BASE_URL = "http://api.airvisual.com/v2"; // Base URL only
  const API_KEY = "67e59d43-aaf8-4fdf-aa32-788cb82a1d0f";

  const fetchCountries = async () => {
    const response = await fetch(`${BASE_URL}/countries?key=${API_KEY}`);
    const result = await response.json();
    setCountryList(result.data);
    console.log(result.data);
  };
  const fetchStates = async (country) => {
    const response = await fetch(
      `${BASE_URL}/states?country=${country}&key=${API_KEY}`
    );
    const data1 = await response.json();
    console.log(data1.data);
    setStateList(data1.data);
  };
  const fetchCities = async (state, countryy) => {
    const response = await fetch(
      `${BASE_URL}/cities?state=${state}&country=${countryy}&key=${API_KEY}`
    );
    const data2 = await response.json();
    console.log(data2.data);
    setCityList(data2.data);
  };
};
export default searchbar1;
