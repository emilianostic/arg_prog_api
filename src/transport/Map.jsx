import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import "../styles.css";

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

      } else if (opcionSeleccionada === "5") {
        fetchData("5", setDatosOtraApi);

      } else if (opcionSeleccionada === "55") {
        fetchData("55", setDatosOtraApi);

      } else if (opcionSeleccionada === "2") {
        fetchData("2", setDatosOtraApi);

      } else if (opcionSeleccionada === "103") {
        fetchData("103", setDatosOtraApi);

      } else if (opcionSeleccionada === "8") {
        fetchData("8", setDatosOtraApi);

      } else if (opcionSeleccionada === "92") {
        fetchData("92", setDatosOtraApi);

      } else if (opcionSeleccionada === "172") {
        fetchData("172", setDatosOtraApi);

      } else if (opcionSeleccionada === "84") {
        fetchData("84", setDatosOtraApi);

      } else if (opcionSeleccionada === "146") {
        fetchData("146", setDatosOtraApi);

      } else if (opcionSeleccionada === "105") {
        fetchData("105", setDatosOtraApi);

      }  else if (opcionSeleccionada === "26") {
        fetchData("26", setDatosOtraApi);

      }  else if (opcionSeleccionada === "132") {
        fetchData("132", setDatosOtraApi);

      }  else if (opcionSeleccionada === "165") {
        fetchData("165", setDatosOtraApi);

      }  else if (opcionSeleccionada === "141") {
        fetchData("141", setDatosOtraApi);

      }  else if (opcionSeleccionada === "36") {
        fetchData("36", setDatosOtraApi);

      }  else if (opcionSeleccionada === "143") {
        fetchData("143", setDatosOtraApi);

      }  
      else {
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
      <select className="selectLine" value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
      <option value="">Elija una línea</option>
      <option value="2">línea 2 </option>
        <option value="5">línea 5 </option>
        <option value="8">línea 8</option>
        <option value="15"> línea 15</option>
        <option value="25"> línea 25</option>
        <option value="26">línea 26 </option>
        <option value="36">línea 36</option>
        <option value="55"> línea 55</option>
        <option value="65"> línea 65</option>
        <option value="92">línea 92 </option>
        <option value="103">línea 103</option>
        <option value="105"> línea 105</option>
        <option value="132"> línea 132</option>
        <option value="141">línea 141 </option>
        <option value="143">línea 143</option>
        <option value="146"> línea 146</option>
        <option value="165"> línea 165</option>
        <option value="172">línea 172 </option>
  
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
