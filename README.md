# 🌤️ WeatherWise

WeatherWise é um aplicativo moderno de previsão do tempo desenvolvido com **React**, **TypeScript** e **TailwindCSS**, que consome a API da [OpenWeatherMap](https://openweathermap.org/api) para exibir:

- 🌡️ Temperatura atual
- 🌧️ Previsão para os próximos 5 dias
- 💨 Velocidade do vento, umidade e sensação térmica
- 🎯 Busca por cidade

---

## 📸 Preview

<img width="1912" height="802" alt="image" src="https://github.com/user-attachments/assets/1fe968bb-66db-4d2e-8a76-7f7f1dd68e5a" />

<img width="1918" height="764" alt="image" src="https://github.com/user-attachments/assets/465e4d71-3ca5-466f-8717-7b0c86a341c5" />

---

## 🚀 Tecnologias Utilizadas

- **React + Next.js**
- **TypeScript**
- **TailwindCSS**
- **API REST** (OpenWeatherMap)
- **ESLint + Prettier**
- **Composição com Componentes Reutilizáveis**
- **Responsividade com Flexbox + Grid**

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/gezinnn/weatherwise.git
cd weatherwise

2. Clone o repositório:
npm install

3. Crie um arquivo .env.local com sua chave da OpenWeatherMap:
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here

4.Inicie o projeto:
npm run dev

```
## 🔧 Estrutura de Componentes

```bash
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── Error.tsx
│       ├── ForecastCard.tsx
│       ├── Loader.tsx
│       ├── SearchBar.tsx
│       └── WeatherCard.tsx
├── lib/
│   └── utils.ts
├── services/
│   └── weatherService.ts
├── types/
│   └── weather.d.ts
└── utils/
    └── formatDate.ts
```

---


## 🌎 API Utilizada

Os dados são obtidos da API pública OpenWeatherMap, usando os endpoints:

- /data/2.5/weather
- /data/2.5/forecast
  
---

## 💡 Funcionalidades

- **✅ Busca por cidade**
- **✅ Exibição do clima atual**
- **✅ Previsão dos próximos 5 dias**
- **✅ Ícones dinâmicos de clima**
- **✅ Feedback visual com loading e mensagens de erro**
- **✅ Feedback visual com loading e mensagens de erro**

---

## 📘 Licença

Projeto desenvolvido para fins de aprendizado e portfólio. Você pode usá-lo como base para seus próprios projetos!

---

## 🢛 Autor

Desenvolvido por Geovanni Almeida

---
