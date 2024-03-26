import { useWeather } from "../context/WeatherDataContext";


function CitySelect() {
  const { city, handleCityChange } = useWeather();

  return (
    <div>
      <select value={city} onChange={handleCityChange}>
        <option value="parana">Paraná</option>
        <option value="caballito">Caballito</option>
        <option value="parquePatricios">Parque Patricios</option>
        <option value="neuquen">Neuquén</option>
        <option value="sanbe">San Benito</option>
        <option value="gualeguay">Gualeguay</option>
        <option value="madrid">Madrid</option>
        <option value="hasenkamp">Hasenkamp</option>
      </select>
      <div>
        {/* Aquí renderiza los datos de weatherData según la ciudad seleccionada */}
      </div>
    </div>
  );
}

export default CitySelect
