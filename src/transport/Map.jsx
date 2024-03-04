import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect} from "react";
//import { useTraffic } from "./TrafficContext";

const Map = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [datosApi, setDatosApi] = useState([]);
  const [datosOtraApi, setDatosOtraApi] = useState([]);
  const [datosTerceraApi, setDatosTerceraApi] = useState([]);
  // Función para manejar el cambio de opción
  const handleChange = (e) => {
    setOpcionSeleccionada(e.target.value);
  };
  useEffect(() => {

    if (opcionSeleccionada) {
      if (opcionSeleccionada === "62") {
       
        // Llamada a la primera API
        fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=62&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
          .then(response => response.json())
          .then(data => setDatosApi(data))
          .catch(error => console.error('Error al obtener datos de la API 1:', error));
      } else if (opcionSeleccionada === "63") {
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


//let filteredPositions = "";
/* const Map = () => {
 const { opcionSeleccionada, dataTraffic, /*selectedDestiny,  datosApi, datosOtraApi, datosTerceraApi */ /* } = useTraffic(); */

  //console.log(dataTraffic);
 // console.log(selectedDestiny);



  return (
    <>
    <p>{datosApi}</p>
    <p>{datosOtraApi}</p>
    <p>{datosTerceraApi}</p>
      <select
        value={opcionSeleccionada}
        onChange={handleChange}
      >
        <>
          <option value="62">línea 62 </option>
          <option value="63">línea 63</option>
          <option value="64"> línea 64</option>
        </>
      </select>

      {/* <select  onChange={(e)=> handlerOnChange(e.target.value)} >{dataTraffic.map((item, index) =>
    <><option >a Alessandri </option>
    <option>a Constitución </option>
    <option>a Constitución</option>
    
    </>)}

    </select>  */}
      <MapContainer
        center={[-34.78661, -58.2494]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {opcionSeleccionada === "63" && (datosOtraApi.map((data, index) => {
          return (
            <>
              <Marker position={[data.latitude, data.longitude]} key={index}>
                <Popup>
                  <span role="img" aria-label="emoji">
                    {" "}
                    🚌{" "}
                  </span>{" "}
                  <br />
                  Line {data.agency_id} <br />
                  Velocity {Math.round(data.speed)}
                  <br />
                  Destiny {data.trip_headsign}
                  <br />
                  ID {data.id}
                  <br />
                  Agency {data.agency_name}
                </Popup>
              </Marker>
            </>
          );
        }))}
      </MapContainer>
    </>
  );
};
export default Map;
