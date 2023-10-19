import { createContext, useState, useEffect, useContext } from "react";
import FetchData from "../components/FetchData";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [uvIndexMax, setUvIndexMax] = useState(null);
  const[loading, setLoading] = useState(true)
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [windStatus, setWindStatus] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [hourlyVisibility, setHourlyVisibility] = useState(null);
  const [rainProbability, setRainProbability] = useState(null)
const [weatherCode, setWeatherCode] = useState(null)
const [weatherCode2, setWeatherCode2] = useState(null)
const [minTemperature_2m, setMinTemperature_2m] = useState(null)
const [maxTemperature_2m, setMaxTemperature_2m] = useState(null)
const [dateFormat, setDateFormat] = useState(null)
const [actualTemp, setActualTemp] = useState(null)
const [dailyTemp, setDailyTemp] = useState(null)
const [hourlyTime, setHourlyTime] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchDataApi = async () => {
      try {
        const data = await FetchData();
        setLoading(false)
        setUvIndexMax(data.daily.uv_index_max);
        setSunrise(data.daily.sunrise);
        setSunset(data.daily.sunset);
        setWindStatus(data.current_weather.windspeed);
        setHumidity(data.hourly.relativehumidity_2m);
        setHourlyVisibility(data.hourly.visibility);
        setRainProbability(data.hourly.precipitation_probability);
      
       setMinTemperature_2m(data.hourly.temperature_2m)
       setMaxTemperature_2m(data.hourly.temperature_2m)
       setActualTemp(data.current_weather.temperature)
       setDailyTemp(data.hourly.temperature_2m)
       setHourlyTime(data.hourly.time)
       setDateFormat(data.current_weather.time)
       setWeatherCode(data.current_weather.weathercode)
       setWeatherCode2(data.current_weather.weathercode)

       console.log(data.current_weather.weathercode)
      } catch (error) {
        console.log("Error:", error);
        
      }
    };

    fetchDataApi();
  }, []);


  if (loading) {
    
    return(
      <div>
        Cargando...
      </div>
    );
  }


  return (
    <DataContext.Provider
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useWeather debe usarse con  WeatherProvider");
  }
  return context;
};
