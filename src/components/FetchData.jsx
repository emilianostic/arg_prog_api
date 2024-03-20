import { useState, useEffect } from "react";

const FetchData = () => { 
  const [datosApi, setDatosApi] = useState([]);
  const [datosOtraApi, setDatosOtraApi] = useState([]);
  const [datosTerceraApi, setDatosTerceraApi] = useState([]);
  const [datosDuartaApi, setDatosCuartaApi] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const fetchDatas = (latitude, longitude, setData) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility&daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(`Error al obtener datos de la API ${latitude, longitude}:`, error));
  };
  useEffect(() => {
    if (opcionSeleccionada) {
      if (opcionSeleccionada === "Caballito") {
        fetchDatas("-34.6226", "-58.441", setDatosApi);
      } else if (opcionSeleccionada === "Parque Patricios") {
        fetchDatas("-34.6382", "-58.4014", setDatosApi);
      } else if(opcionSeleccionada === "Paraná") {
        fetchDatas("-31.7327", "-60.529", setDatosTerceraApi);
      }else {
        fetchDatas("-38.9516", "-68.0591", setDatosCuartaApi);
      }
    }
  }, [opcionSeleccionada]);

  return(
    <>
    <select value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
    <option value="">Elija una ciudad o barrio</option>
      <option value="Caballito">Caballito </option>
      <option value="Parque Patricios">Parque Patricios</option>
      <option value="Paraná"> Paraná</option>
      <option value="Neuquén"> Neuquén</option> 
    </select>
    </>
  )
}


 export default FetchData