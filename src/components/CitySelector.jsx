import { useWeather } from "./WeatherDataContextProvider";

function WeatherComponent() {
  const { city, handleCityChange } = useWeather();

  return (
    <div>
      <select value={city} onChange={handleCityChange}>
        <option value="Paraná">Ciudad 1</option>
        <option value="Caballito">Ciudad 2</option>
        <option value="Parque Patricios">Ciudad 3</option>
        <option value="Neuquén">Ciudad 4</option>
      </select>
      <div>
        {/* Aquí renderiza los datos de weatherData según la ciudad seleccionada */}
      </div>
    </div>
  );
}

export default WeatherComponent
