const Weather = () => {
  const fetchWeatherInfo = async (city, state, country) => {
    const response = await fetch(
      `${BASE_URL}/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
    );
    const data3 = await response.json();
    console.log(data3);
  };

  useEffect(() => {
    console.log("1");
    console.log("a");
    // fetchWeatherInfo("Los Angeles", "California", "USA");
    console.log("b");
    console.log("c");
  }, []);
};
