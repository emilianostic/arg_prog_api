import { createContext, useState, useEffect, useContext } from "react";
import FetchData from "../components/FetchData";

const cityCoordinates = {
  parana: { latitude: "-31.7327", longitude: "-60.529" },
  caballito: { latitude: "-34.6226", longitude: "-58.441" },
  parquePatricios: { latitude: "-34.6382", longitude: "-58.4014" },
  neuquen: { latitude: "-38.9516", longitude: "-68.0591" },
  sanbe: { latitude: "-31.7837", longitude: "-60.4416" },
  gualeguay: { latitude: "-33.1416", longitude: "-59.3097" },
  trescantos: { latitude: "40.6009", longitude: "-3.7081" },
  hasenkamp: { latitude: "-31.5123", longitude: "-59.8355" },
};

const WeatherDataContext = createContext();

export function WeatherDataContextProvider({ children }) {
  const [city, setCity] = useState("parana");
  const [uvIndexMax, setUvIndexMax] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [windStatus, setWindStatus] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [hourlyVisibility, setHourlyVisibility] = useState(null);
  const [rainProbability, setRainProbability] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);
  const [weatherCode2, setWeatherCode2] = useState(null);
  const [minTemperature_2m, setMinTemperature_2m] = useState(null);
  const [maxTemperature_2m, setMaxTemperature_2m] = useState(null);
  const [dateFormat, setDateFormat] = useState(null);
  const [actualTemp, setActualTemp] = useState(null);
  const [dailyTemp, setDailyTemp] = useState(null);
  const [hourlyTime, setHourlyTime] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchDataApi = async () => {
      try {
        const { latitude, longitude } = cityCoordinates[city];
        const data = await FetchData(latitude, longitude);
        setLoading(false);
        setUvIndexMax(data.daily.uv_index_max);
        setSunrise(data.daily.sunrise);
        setSunset(data.daily.sunset);
        setWindStatus(data.current_weather.windspeed);
        setHumidity(data.hourly.relativehumidity_2m);
        setHourlyVisibility(data.hourly.visibility);
        setRainProbability(data.hourly.precipitation_probability);
        setMinTemperature_2m(data.hourly.temperature_2m);
        setMaxTemperature_2m(data.hourly.temperature_2m);
        setActualTemp(data.current_weather.temperature);
        setDailyTemp(data.hourly.temperature_2m);
        setHourlyTime(data.hourly.time);
        setDateFormat(data.current_weather.time);
        setWeatherCode(data.current_weather.weathercode);
        setWeatherCode2(data.current_weather.weathercode);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchDataApi();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <WeatherDataContext.Provider
      value={{
        uvIndexMax,
        sunrise,
        sunset,
        windStatus,
        humidity,
        hourlyVisibility,
        rainProbability,
        minTemperature_2m,
        maxTemperature_2m,
        actualTemp,
        dailyTemp,
        hourlyTime,
        dateFormat,
        weatherCode,
        weatherCode2,
        loading,
        city,
        handleCityChange,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(WeatherDataContext);
  if (!context) {
    throw new Error("useWeather debe usarse con  WeatherProvider");
  }
  return context;
};
