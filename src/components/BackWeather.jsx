import styled from "styled-components";
//import { useWeather } from "../context/WeatherDataContext";


const DivBackWeather = styled.div`
min-height: 100vh;
width: 100%;
box-sizing: border-box;
background-image: url("./img/clear sky.jpg");   
 
`;

/* const weatherCodeInfo = {
    0: {
      name: "Clear sky",
      icon: " ☀️",
    },
    1: {
      name: "Mainly clear",
      icon: " ☀️",
    },
    2: {
      name: "Partly cloudy",
      icon: "🌤️",
    },
    3: {
      name: "Overcast",
      icon: "☁️",
    },
    45: {
      name: "Fog",
      icon: "🌁",
    },
    48: {
      name: "Depositing rime fog",
      icon: "🌫️",
    },
    51: {
      name: "Drizzle Light",
      icon: "🫧",
    },
    53: {
      name: "Drizzle moderate",
      icon: "🫧 🫧",
    },
    55: {
      name: "Drizzle dense",
      icon: "🫧 🫧 🫧",
    },
    56: {
      name: "Freezing Drizzle light",
      icon: "❄️ 🫧",
    },
    57: {
      name: "Freezing Drizzle dense",
      icon: "🫧 ❄️ 🫧 ❄️",
    },
    61: {
      name: "Rain: Slight",
      icon: "🌦️",
    },
    63: {
      name: "Rain moderate",
      icon: "🌨️",
    },
    65: {
      name: "Rain heavy",
      icon: "⛈️",
    },
    66: {
      name: "Freezing Rain light",
      icon: "❄️🌨️",
    },
    67: {
      name: "Freezing Rain heavy",
      icon: "❄️🌨️❄️🌨️",
    },
    71: {
      name: "Snow fall slight",
      icon: "❄️",
    },
    73: {
      name: "Snow fall moderate",
      icon: "❄️❄️",
    },
    75: {
      name: "Snow fall heavy",
      icon: "❄️❄️❄️",
    },
    77: {
      name: "Snow grains",
      icon: "❄️❄️❄️❄️",
    },
    80: {
      name: "Rain Slight",
      icon: "🌨️",
    },
    81: {
      name: "Rain moderate",
      icon: "🌨️",
    },
    82: {
      name: "Rain violent",
      icon: "🌨️🌨️🌨️",
    },
    85: {
      name: "Snow showers slight",
      icon: "❄️",
    },
    86: {
      name: "Snow showers heavy",
      icon: "❄️❄️❄️",
    },
    95: {
      name: "Thunderstorm Slight or moderate",
      icon: "⚡",
    },
    96: {
      name: "Thunderstorm with slight hail",
      icon: "⚡",
    },
    99: {
      name: "Thunderstorm with heavy hail",
      icon: "⚡⚡⚡",
    },
  };
 */

const BackWeather = () => {
  /* const { weatherCode } = useWeather(); */
  /* 
    let backgroundImage;
  
    // Verifica si el weatherCode existe en el objeto weatherCodeInfo
    if (weatherCodeInfo[weatherCode]) {
      const weatherType = weatherCodeInfo[weatherCode].name.toLowerCase();
      console.log(weatherType)
      backgroundImage = `./components/img/${weatherType}.jpg`;
    } else {
      backgroundImage = "./components/img/default.jpg"; // Si no se encuentra un código válido, muestra una imagen por defecto
    } */

  return (
    <DivBackWeather /* style={{ backgroundImage: `url(${backgroundImage})` }} */
    />
  );
};

export default BackWeather;
