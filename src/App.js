import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock";
import { apiKey } from "./api_key";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [animate, setAnimate] = useState(false);

  const searchLocation = location => {
    setLoading(true);
    setWeatherData(null);
    setError(false);
    setAnimate(false);
    fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
    )
      .then(res => res.json())
      .then(res => {
        if (res && res.success !== false) {
          setWeatherData(res);
          setLoading(false);
          setAnimate(true);
        } else {
          setError(true);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <Form searchLocation={searchLocation} />
        <WeatherBlock
          weatherData={weatherData}
          loading={loading}
          error={error}
          animate={animate}
        />
      </div>
    </div>
  );
}

export default App;
