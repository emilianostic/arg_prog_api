import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";

const Map = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [datosApi, setDatosApi] = useState([]);
  const [datosOtraApi, setDatosOtraApi] = useState([]);
  const [datosTerceraApi, setDatosTerceraApi] = useState([]);
 

  const fetchData = (agencyId, setData) => {
    const apiUrl = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=${agencyId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(`Error al obtener datos de la API ${agencyId}:`, error));
  };

  

  useEffect(() => {
    if (opcionSeleccionada) {
      if (opcionSeleccionada === "25") {
        fetchData("25", setDatosApi);
      } else if (opcionSeleccionada === "71") {
        fetchData("71", setDatosOtraApi);
      } else {
        fetchData("15", setDatosTerceraApi);
      }
    }
  }, [opcionSeleccionada]);

  const renderMarkers = (data) => (
    data.map((dato, index) => (
      <Marker position={[dato.latitude, dato.longitude]} key={index}>
        <Popup>
          <span role="img" aria-label="emoji"> 🚌 </span> <br />
          Line {dato.agency_id} <br />
          Velocity {Math.round(dato.speed)} <br />
          Destiny {dato.trip_headsign} <br />
          ID {dato.id} <br />
          Agency {dato.agency_name}
        </Popup>
      </Marker>
    ))
  );

  return (
    <>
      <select value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
      <option value="">Elija una línea</option>
        <option value="25">línea 25 </option>
        <option value="71">línea 71</option>
        <option value="15"> línea 15</option> 
      </select>

      <MapContainer center={[-34.58661, -58.5494]} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {opcionSeleccionada === "25" && renderMarkers(datosApi)}
        {opcionSeleccionada === "71" && renderMarkers(datosOtraApi)}
        {opcionSeleccionada === "15" && renderMarkers(datosTerceraApi)}
      </MapContainer>
    </>
  );
};

export default Map;
