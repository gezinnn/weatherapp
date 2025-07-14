const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function getCurrentWeather(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );

  if (!res.ok) {
    throw new Error("Cidade Não Encontrado");
  }

  return res.json();
}

export async function getForecastByCity(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar previsão da cidade");
  }

  return res.json();
}
