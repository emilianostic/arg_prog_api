
import { useWeather } from "../context/WeatherDataContext";


const CitySelect = () =>{
  const { latitude, longitude} = useWeather();
return (
    <>
<select>
<option value="">Elija una ciudad o barrio</option>
  <option value="25">Caballito </option>
  <option value="71">Parque Patricios</option>
  <option value="15"> Paraná</option>
  <option value="15"> Neuquén</option> 
</select>
</>
)}
export default CitySelect