import React, { useState } from "react";
import styles from "../Pages/WeatherApp.module.css";

const api = {
  key: "aa55592c2af69d3005493afabc90cb08",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherApp() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.appheader}>
          <h1>Weather App</h1>
        </div>
        <div className={styles.appcontent}>
          <div className={styles.inputSearch}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Procure uma Cidade"
            />

            <button onClick={searchPressed}>Pesquisar</button>
          </div>

          {typeof weather.main !== "undefined" ? (
            <div>
              <p>{weather.name}</p>
              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
