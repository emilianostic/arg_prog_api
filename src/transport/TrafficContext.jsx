import { createContext, useState, useEffect, useContext } from "react";
import FetchDataTraffic from "./FetchDataTraffic";
import styled from "styled-components"

const TrafficContext = createContext();
const DivLoading = styled.div`
 margin-left: 50%;
  
 
`;


export function TrafficContextProvider({ children }) {
  const [dataTraffic, setDataTraffic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [datosApi, setDatosApi] = useState([]);
  const [datosOtraApi, setDatosOtraApi] = useState([]);
  const [datosTerceraApi, setDatosTerceraApi] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchTrafficApi = async () => {
      try {
        const data = await FetchDataTraffic();
        setLoading(false);
        setDataTraffic(data);
        setTimeout(() => {
          fetchTrafficApi();
        }, 31000);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchTrafficApi();
  }, []);

  

  useEffect(() => {

    if (opcionSeleccionada) {
      if (setOpcionSeleccionada ('62')) {
       
        // Llamada a la primera API
        fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=62&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
          .then(response => response.json())
          .then(data => setDatosApi(data))
          .catch(error => console.error('Error al obtener datos de la API 1:', error));
      } else if (setOpcionSeleccionada ('63')) {
        // Llamada a la segunda API
        fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=63&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
          .then(response => response.json())
          .then(data => setDatosOtraApi(data))
          .catch(error => console.error('Error al obtener datos de la API 2:', error));
      }
      else{
        fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=64&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
        .then(response => response.json())
        .then(data => setDatosTerceraApi(data))
        .catch(error => console.error('Error al obtener datos de la API 3:', error));
      }
    }
  }, [opcionSeleccionada]);



  if (loading) {
    return <DivLoading>Cargando...</DivLoading>;
  }

  return (
    <TrafficContext.Provider
      value={{
        dataTraffic,
        loading,
        datosApi,
        datosOtraApi,
        datosTerceraApi,
        opcionSeleccionada
      }}
    >
      {children}
    </TrafficContext.Provider>
  );
}

export const useTraffic = () => {
  const context = useContext(TrafficContext);
  if (!context) {
    throw new Error("useWeather debe usarse con  WeatherProvider");
  }
  return context;
};
