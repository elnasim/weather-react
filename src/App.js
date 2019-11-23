import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock";
import { apiKey } from "./api_key";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [dataIsReady, setDataIsReady] = useState(false);

  const searchLocation = location => {
    setDataIsReady(false);
    fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
    )
      .then(res => res.json())
      .then(res => {
        setWeatherData(res);
        if (res.success === false) {
          console.log("-->", "err");
        } else {
          setDataIsReady(true);
        }
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <Form searchLocation={searchLocation} />
        <WeatherBlock weatherData={weatherData} dataIsReady={dataIsReady} />
      </div>
    </div>
  );
}

export default App;
