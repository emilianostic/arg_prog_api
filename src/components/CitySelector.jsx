import { useWeather } from "../context/WeatherDataContext";
import "../styles.css";

function CitySelect() {
  const { city, handleCityChange } = useWeather();

  return (
    <>
      <select className="selector" value={city} onChange={handleCityChange}>
        <option value="parana">Paraná</option>
        <option value="caballito">Caballito</option>
        <option value="parquePatricios">Parque Patricios</option>
        <option value="neuquen">Neuquén</option>
        <option value="sanbe">San Benito</option>
        <option value="gualeguay">Gualeguay</option>
        <option value="trescantos">Tres Cantos</option>
        <option value="hasenkamp">Hasenkamp</option>
      </select>
    </>
  );
}

export default CitySelect;
