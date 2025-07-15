"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {
  getCurrentWeather,
  getForecastByCity,
} from "../services/weatherService";
import type { ForecastDay } from "../components/ForecastCard";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  type ForecastAPIItem = {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError("");

    try {
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(city),
        getForecastByCity(city),
      ]);

      setWeather(weatherData);

      const dailyMap: Record<string, ForecastAPIItem[]> = {};
      forecastData.list.forEach((item: ForecastAPIItem) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyMap[date]) dailyMap[date] = [];
        dailyMap[date].push(item);
      });

      const dailyForecast = Object.entries(dailyMap)
        .slice(0, 5)
        .map(([date, entries]) => {
          const temps = entries.map((e) => e.main.temp);
          const max = Math.max(...temps);
          const min = Math.min(...temps);
          const midday =
            entries.find((e) => e.dt_txt.includes("12:00:00")) || entries[0];

          return {
            date,
            max,
            min,
            icon: midday.weather[0].icon,
            description: midday.weather[0].description,
          };
        });

      setForecast(dailyForecast);
    } catch (err) {
      if (err && typeof err === "object" && "message" in err) {
        setError(String((err as { message: string }).message));
      } else {
        setError("Erro desconhecido");
      }
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <main
      className={`min-h-screen flex justify-center px-4 py-8 transition-colors ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full max-w-3xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="border rounded-xl px-3 py-1  dark:bg-black dark:text-gray-200 transition"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">WeatherWise 🌤️</h1>

        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />

        <div className="flex flex-col mt-6 items-center">
          {loading && <Loader />}
          {error && <Error message={error} />}
          {weather && <WeatherCard data={weather} />}
        </div>
        {forecast.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            {forecast.map((day, index) => (
              <ForecastCard
                key={index}
                date={day.date}
                icon={day.icon}
                description={day.description}
                max={day.max}
                min={day.min}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
