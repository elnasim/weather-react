import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./WeatherBlock.scss";

export default ({ weatherData, loading, error, animate }) => {
  const temp = temp => {
    if (temp > 0) {
      return "+" + temp;
    } else {
      return temp;
    }
  };

  return (
    <div className="weather-wrapper">
      <CSSTransition in={animate} timeout={300} classNames="my-node">
        <div>
          {weatherData && (
            <div className="weather">
              <div className="weather__title">{weatherData.location.name}</div>

              <div className="weather__row">
                <div className="weather__time">
                  Местное время: {weatherData.location.localtime.slice(11)}
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__temperature">
                  Температура: {temp(weatherData.current.temperature)}
                </div>
                <div className="weather__feelslike">
                  По ощущениям: {temp(weatherData.current.feelslike)}
                </div>
                <img
                  src={weatherData.current.weather_icons}
                  className="weather__weather-icon"
                />
              </div>

              <div className="weather__row">
                <div className="weather__wind-speed">
                  Скорость ветра: {weatherData.current.wind_speed} км/ч
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__wind-dir">
                  Направление ветра: {weatherData.current.wind_dir}
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__pressure">
                  Давление: {weatherData.current.pressure} миллибар
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__precip">
                  Осадки: {weatherData.current.precip} мм
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__humidity">
                  Влажность воздуха: {weatherData.current.humidity} %
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__cloudcover">
                  Облачность: {weatherData.current.cloudcover} %
                </div>
              </div>

              <div className="weather__row">
                <div className="weather__visibility">
                  Видимость: {weatherData.current.visibility} км
                </div>
              </div>
            </div>
          )}
        </div>
      </CSSTransition>

      {error && <div>Ошибка обработки запроса</div>}
      {loading && <div>Загрузка...</div>}
    </div>
  );
};
