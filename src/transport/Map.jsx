import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import { useTraffic } from "./TrafficContext";

let colectivos = [
  {
    "route_id": "315",
    "latitude": -34.78633,
    "longitude": -58.27886,
    "speed": 0,
    "timestamp": 1708542040,
    "id": "1911",
    "direction": 0,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148D",
    "tip_id": "24069-1",
    "trip_headsign": "a Alessandri"
  },
  {
    "route_id": "316",
    "latitude": -34.80725,
    "longitude": -58.264,
    "speed": 0,
    "timestamp": 1708542042,
    "id": "1913",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148D",
    "tip_id": "24179-1",
    "trip_headsign": "a Constitución"
  },
  {
    "route_id": "1649",
    "latitude": -34.78341,
    "longitude": -58.3144,
    "speed": 0,
    "timestamp": 1708538590,
    "id": "1927",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148I",
    "tip_id": "106545-1",
    "trip_headsign": "a Constitución"
  },
  {
    "route_id": "316",
    "latitude": -34.64574,
    "longitude": -58.37476,
    "speed": 12.7777767,
    "timestamp": 1708542012,
    "id": "1941",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148D",
    "tip_id": "24173-1",
    "trip_headsign": "a Constitución"
  },
  {
    "route_id": "1634",
    "latitude": -34.77925,
    "longitude": -58.26314,
    "speed": 0,
    "timestamp": 1708542042,
    "id": "2075",
    "direction": 0,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148B",
    "tip_id": "105304-1",
    "trip_headsign": "C - Capilla"
  },
  {
    "route_id": "1634",
    "latitude": -34.81048,
    "longitude": -58.27281,
    "speed": 0,
    "timestamp": 1708542042,
    "id": "2128",
    "direction": 0,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148B",
    "tip_id": "105303-1",
    "trip_headsign": "C - Capilla"
  },
  {
    "route_id": "1646",
    "latitude": -34.78335,
    "longitude": -58.31442,
    "speed": 0,
    "timestamp": 1708542042,
    "id": "2330",
    "direction": 0,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148H",
    "tip_id": "106252-1",
    "trip_headsign": "F x Monteverde"
  },
  {
    "route_id": "1634",
    "latitude": -34.85838,
    "longitude": -58.27766,
    "speed": 11.3888884,
    "timestamp": 1708542042,
    "id": "2469",
    "direction": 0,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148B",
    "tip_id": "105303-1",
    "trip_headsign": "C - Capilla"
  },
  {
    "route_id": "1633",
    "latitude": -34.84444,
    "longitude": -58.2833061,
    "speed": 2.5,
    "timestamp": 1708542042,
    "id": "3610",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148A",
    "tip_id": "105247-1",
    "trip_headsign": "a Constitución"
  },
  {
    "route_id": "1635",
    "latitude": -34.81186,
    "longitude": -58.27268,
    "speed": 0,
    "timestamp": 1708542044,
    "id": "8440",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148B",
    "tip_id": "105344-1",
    "trip_headsign": "a Constitución"
  },
  {
    "route_id": "1647",
    "latitude": -34.74881,
    "longitude": -58.2864342,
    "speed": 1.388888,
    "timestamp": 1708542044,
    "id": "10945",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148H",
    "tip_id": "106355-1",
    "trip_headsign": "a Constitución"
  },
  {
    "route_id": "316",
    "latitude": -34.78682,
    "longitude": -58.24938,
    "speed": 0,
    "timestamp": 1708542046,
    "id": "12268",
    "direction": 1,
    "agency_name": "EL NUEVO HALCON S.A.",
    "agency_id": 63,
    "route_short_name": "148D",
    "tip_id": "24180-1",
    "trip_headsign": "a Constitución"
  },
]

console.log(colectivos[0].route_id);

let filteredPositions = "";
const Map = () => {
  const { dataTraffic, selectedDestiny } = useTraffic();

  //console.log(dataTraffic);
 // console.log(selectedDestiny);

  const handlerOnChange = (selectedDestiny) => {
    // Filtrar las posiciones según el destino seleccionado
    filteredPositions = dataTraffic.filter(
      (data) => data.trip_headsign === selectedDestiny
    );

    // Puedes hacer lo que necesites con las posiciones filtradas.
    console.log(filteredPositions);
    // Por ejemplo, puedes almacenarlas en el estado local si las necesitas en el componente. */
  };

  return (
    <>
      <select
        value={selectedDestiny}
        onChange={(e) => handlerOnChange(e.target.value)}
      >
        <>
          <option>a Alessandri </option>
          <option>a Constitución </option>
          <option>a Constitución</option>
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
        {dataTraffic.map((data, index) => {
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
        })}
      </MapContainer>
    </>
  );
};
export default Map;
