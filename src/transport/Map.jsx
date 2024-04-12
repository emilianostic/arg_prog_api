import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import "../styles.css";

const Map = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [datosApi, setDatosApi] = useState({});
//  const [dataTraffic, setDataTraffic] = useState(null);
  const fetchData = (agencyId, setData) => {
    const apiUrl = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=${agencyId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        setData((prevData) => ({ ...prevData, [agencyId]: data }))
      )
      .catch((error) =>
        console.error(`Error al obtener datos de la API ${agencyId}:`, error)
      );
  };

  useEffect(() => {
    if (opcionSeleccionada) {
      const fetchDataForOption = {
        25: setDatosApi,
        71: setDatosApi,
        5: setDatosApi,
        55: setDatosApi,
        2: setDatosApi,
        103: setDatosApi,
        8: setDatosApi,
        92: setDatosApi,
        172: setDatosApi,
        84: setDatosApi,
        146: setDatosApi,
        105: setDatosApi,
        26: setDatosApi,
        132: setDatosApi,
        165: setDatosApi,
        141: setDatosApi,
        36: setDatosApi,
        143: setDatosApi,
        15: setDatosApi,
      };
      fetchData(opcionSeleccionada, fetchDataForOption[opcionSeleccionada]);
    }
  }, [opcionSeleccionada]);

  useEffect(() => {
    let intervalId;
  
    if (opcionSeleccionada) {
      // Definir una función para obtener los datos de la API
      const fetchDataForOption = (agencyId) => {
        const apiUrl = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=${agencyId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setDatosApi((prevData) => ({ ...prevData, [agencyId]: data }));
          })
          .catch((error) =>
            console.error(`Error al obtener datos de la API ${agencyId}:`, error)
          );
      };
  
      // Obtener datos inicialmente
      fetchDataForOption(opcionSeleccionada);
  
      // Establecer intervalo para obtener datos cada 31 segundos
      intervalId = setInterval(() => {
        fetchDataForOption(opcionSeleccionada);
      }, 31000);
    }
  
    // Limpiar el intervalo cuando cambia la opción seleccionada
    return () => clearInterval(intervalId);
  }, [opcionSeleccionada]);



 
  const renderMarkers = (data) =>
    data.map((dato, index) => (
      <Marker position={[dato.latitude, dato.longitude]} key={index}>
        <Popup>
          <span role="img" aria-label="emoji">
            {" "}
            🚌{" "}
          </span>{" "}
          <br />
          Line {dato.agency_id} <br />
          Velocity {Math.round(dato.speed)} <br />
          Destiny {dato.trip_headsign} <br />
          ID {dato.id} <br />
          Agency {dato.agency_name}
        </Popup>
      </Marker>
    ));

  return (
    <>
      <select
        className="selectLine"
        value={opcionSeleccionada}
        onChange={(e) => setOpcionSeleccionada(e.target.value)}
      >
        <option value="">Elija una línea</option>
        <option value="2">línea 2 </option>
        <option value="5">línea 5 </option>
        <option value="8">línea 8</option>
        <option value="15"> línea 15</option>
        <option value="25"> línea 25</option>
        <option value="26">línea 26 </option>
        <option value="36">línea 36</option>
        <option value="55"> línea 55</option>
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

      <MapContainer
        center={[-34.68661, -58.4494]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {opcionSeleccionada &&
          renderMarkers(datosApi[opcionSeleccionada] || [])}
      </MapContainer>
    </>
  );
};

export default Map;

//código original sin acortar:

/* import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import "../styles.css";

const Map = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [datosApi, setDatosApi] = useState([]);
  const [datosOtraApi, setDatosOtraApi] = useState([]);
  const [datosTerceraApi, setDatosTerceraApi] = useState([]);
  const [datos4Api, set4Api] = useState([]);
  const [datos5Api, set5Api] = useState([]);
  const [datos6Api, set6Api] = useState([]);
  const [datos7Api, set7Api] = useState([]);
  const [datos8Api, set8Api] = useState([]);
  const [datos9Api, set9Api] = useState([]);
  const [datos10Api, set10Api] = useState([]);
  const [datos11Api, set11Api] = useState([]);
  const [datos12Api, set12Api] = useState([]);
  const [datos13Api, set13Api] = useState([]);
  const [datos14Api, set14Api] = useState([]);
  const [datos15Api, set15Api] = useState([]);
  const [datos16Api, set16Api] = useState([]);
  const [datos17Api, set17Api] = useState([]);
  const [datos18Api, set18Api] = useState([]);

  const [datos19Api, set19Api] = useState([]);

  const fetchData = (agencyId, setData) => {
    const apiUrl = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=${agencyId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error(`Error al obtener datos de la API ${agencyId}:`, error)
      );
  };

  useEffect(() => {
    if (opcionSeleccionada) {
      if (opcionSeleccionada === "25") {
        fetchData("25", setDatosApi);
      } else if (opcionSeleccionada === "71") {
        fetchData("71", setDatosOtraApi);
      } else if (opcionSeleccionada === "5") {
        fetchData("5", setDatosTerceraApi);
      } else if (opcionSeleccionada === "55") {
        fetchData("55", set4Api);
      } else if (opcionSeleccionada === "2") {
        fetchData("2", set5Api);
      } else if (opcionSeleccionada === "103") {
        fetchData("103", set6Api);
      } else if (opcionSeleccionada === "8") {
        fetchData("8", set7Api);
      } else if (opcionSeleccionada === "92") {
        fetchData("92", set8Api);
      } else if (opcionSeleccionada === "172") {
        fetchData("172", set9Api);
      } else if (opcionSeleccionada === "84") {
        fetchData("84", set10Api);
      } else if (opcionSeleccionada === "146") {
        fetchData("146", set11Api);
      } else if (opcionSeleccionada === "105") {
        fetchData("105", set12Api);
      } else if (opcionSeleccionada === "26") {
        fetchData("26", set13Api);
      } else if (opcionSeleccionada === "132") {
        fetchData("132", set14Api);
      } else if (opcionSeleccionada === "165") {
        fetchData("165", set15Api);
      } else if (opcionSeleccionada === "141") {
        fetchData("141", set16Api);
      } else if (opcionSeleccionada === "36") {
        fetchData("36", set17Api);
      } else if (opcionSeleccionada === "143") {
        fetchData("143", set18Api);
      } else {
        fetchData("15", set19Api);
      }
    }
  }, [opcionSeleccionada]);

  const renderMarkers = (data) =>
    data.map((dato, index) => (
      <Marker position={[dato.latitude, dato.longitude]} key={index}>
        <Popup>
          <span role="img" aria-label="emoji">
            {" "}
            🚌{" "}
          </span>{" "}
          <br />
          Line {dato.agency_id} <br />
          Velocity {Math.round(dato.speed)} <br />
          Destiny {dato.trip_headsign} <br />
          ID {dato.id} <br />
          Agency {dato.agency_name}
        </Popup>
      </Marker>
    ));

  return (
    <>
      <select
        className="selectLine"
        value={opcionSeleccionada}
        onChange={(e) => setOpcionSeleccionada(e.target.value)}
      >
        <option value="">Elija una línea</option>
        <option value="2">línea 2 </option>
        <option value="5">línea 5 </option>
        <option value="8">línea 8</option>
        <option value="15"> línea 15</option>
        <option value="25"> línea 25</option>
        <option value="26">línea 26 </option>
        <option value="36">línea 36</option>
        <option value="55"> línea 55</option>
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

      <MapContainer
        center={[-34.68661, -58.4494]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {opcionSeleccionada === "25" && renderMarkers(datosApi)}
        {opcionSeleccionada === "71" && renderMarkers(datosOtraApi)}
        {opcionSeleccionada === "5" && renderMarkers(datosTerceraApi)}
        {opcionSeleccionada === "55" && renderMarkers(datos4Api)}
        {opcionSeleccionada === "2" && renderMarkers(datos5Api)}
        {opcionSeleccionada === "103" && renderMarkers(datos6Api)}
        {opcionSeleccionada === "8" && renderMarkers(datos7Api)}
        {opcionSeleccionada === "92" && renderMarkers(datos8Api)}
        {opcionSeleccionada === "172" && renderMarkers(datos9Api)}
        {opcionSeleccionada === "84" && renderMarkers(datos10Api)}
        {opcionSeleccionada === "146" && renderMarkers(datos11Api)}
        {opcionSeleccionada === "105" && renderMarkers(datos12Api)}
        {opcionSeleccionada === "26" && renderMarkers(datos13Api)}
        {opcionSeleccionada === "132" && renderMarkers(datos14Api)}
        {opcionSeleccionada === "165" && renderMarkers(datos15Api)}
        {opcionSeleccionada === "141" && renderMarkers(datos16Api)}
        {opcionSeleccionada === "36" && renderMarkers(datos17Api)}
        {opcionSeleccionada === "143" && renderMarkers(datos18Api)}
        {opcionSeleccionada === "15" && renderMarkers(datos19Api)}
      </MapContainer>
    </>
  );
};

export default Map; */
