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
      if (opcionSeleccionada === "62") {
        fetchData("62", setDatosApi);
      } else if (opcionSeleccionada === "63") {
        fetchData("63", setDatosOtraApi);
      } else {
        fetchData("64", setDatosTerceraApi);
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
        <option value="62">línea 62 </option>
        <option value="63">línea 63</option>
        <option value="64"> línea 64</option>
      </select>

      <MapContainer center={[-34.78661, -58.2494]} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {opcionSeleccionada === "62" && renderMarkers(datosApi)}
        {opcionSeleccionada === "63" && renderMarkers(datosOtraApi)}
        {opcionSeleccionada === "64" && renderMarkers(datosTerceraApi)}
      </MapContainer>
    </>
  );
};

export default Map;
