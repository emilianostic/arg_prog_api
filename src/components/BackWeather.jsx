import { useWeather } from "../context/WeatherDataContext";
import "../styles.css";
import TempDay from "../components/TempDay";
import MeteoCards from "../components/MeteoCards";
import MaxTempMinTemp from "../components/MaxTempMinTemp";
import TempSky from "../components/ActualTempSky";
import CitySelect from "./CitySelector";

const BackWeather = () => {
  const { weatherCode } = useWeather();
  let weatherClass;
  if (weatherCode === 0 || weatherCode === 1 || weatherCode === 2) {
    weatherClass = "clear";
  } else if (weatherCode === 3) {
    weatherClass = "overcast";
  } else if (weatherCode === 45 || weatherCode === 48) {
    weatherClass = "fog";
  } else if (
    weatherCode === 51 ||
    weatherCode === 53 ||
    weatherClass === 55 ||
    weatherCode === 56 ||
    weatherCode === 57 ||
    weatherCode === 61 ||
    weatherCode === 63 ||
    weatherCode === 65 ||
    weatherCode === 66 ||
    weatherCode === 67 ||
    weatherCode === 80 ||
    weatherCode === 81 ||
    weatherCode === 82
  ) {
    weatherClass = "rain";
  } else if (weatherCode === 85 || weatherCode === 86) {
    weatherClass = "snow";
  } else {
    weatherClass = "storm";
  }

  return (
    <div className={weatherClass}>
    
      <div className="temps">
        <CitySelect/>
        <TempSky />
        
      </div>
      <TempDay />
      <div className="meteorology">
        <MaxTempMinTemp />
        <MeteoCards />
      </div>
    </div>
  );
};

export default BackWeather;
