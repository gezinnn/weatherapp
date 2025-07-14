import { WeatherData } from "@/types/weather";

type Props = {
  data: WeatherData;
};

export default function WeatherCard({ data }: Props) {
  return (
    <div className=" w-lg bg-white text-black p-6 rounded-xl text-center border shadow-md hover:scale-103 transition-transform duration-300">
      <h2 className="text-2xl font-semibold mb-2">
        {data.name}, {data.sys.country}
      </h2>
      <div className="flex">
        <p className="text-6xl font-bold">{Math.round(data.main.temp)}°C</p>
        <p className="capitalize">{data.weather[0].description}</p>
        <p>Sensação térmica: {Math.round(data.main.feels_like)}°C</p>
        <p>Umidade: {data.main.humidity}%</p>
        <p>Vento: {data.wind.speed} km/h</p>
      </div>
    </div>
  );
}
