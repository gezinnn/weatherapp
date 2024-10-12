import React, { useState } from "react";
import styles from "../Pages/WeatherApp.module.css";

const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherApp() {
  const [ search, setSearch ] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.appheader}>
        <h1>Weather App</h1>
      </div>
      <div className={styles.appcontent}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Procure uma Cidade"
        />
        <button onClick={searchPressed}>Pesquisar</button>


      </div>
    </div>
  );
}
