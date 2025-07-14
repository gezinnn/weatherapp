/* eslint-disable @next/next/no-img-element */
export type ForecastDay = {
  date: string;
  icon: string;
  description: string;
  max: number;
  min: number;
};

export default function ForecastCard({
  date,
  icon,
  description,
  min,
  max,
}: ForecastDay) {
  const weekday = new Date(date).toLocaleDateString("pt-BR", {
    weekday: "short",
  });

  return (
    <div className=" bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center border shadow-md hover:scale-103 transition-transform duration-300">
      <p className="font-semibold">{weekday}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="w-12 h-12 mx-auto"
      />
      <p className="text-sm capitalize">{description}</p>
      <p>🌡️ Máx: {Math.round(max)}°</p>
      <p>❄️ Mín: {Math.round(min)}°</p>
    </div>
  );
}
