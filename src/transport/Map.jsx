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
 
  {
    "route_id": "887",
    "latitude": -34.67098,
    "longitude": -58.4095345,
    "speed": 0,
    "timestamp": 1708621250,
    "id": "12858",
    "direction": 0,
    "agency_name": "MICRO OMNIBUS SUR S.A.C.",
    "agency_id": 64,
    "route_short_name": "160D",
    "tip_id": "58981-1",
    "trip_headsign": "a Est. Merlo - Pontevedra"
  },
  {
    "route_id": "887",
    "latitude": -34.81479,
    "longitude": -58.389,
    "speed": 12.5,
    "timestamp": 1708621250,
    "id": "12859",
    "direction": 0,
    "agency_name": "MICRO OMNIBUS SUR S.A.C.",
    "agency_id": 64,
    "route_short_name": "160D",
    "tip_id": "58979-1",
    "trip_headsign": "a Est. Merlo - Pontevedra"
  },
  {
    "route_id": "855",
    "latitude": -34.68795,
    "longitude": -58.416935,
    "speed": 7.5,
    "timestamp": 1708621250,
    "id": "12860",
    "direction": 1,
    "agency_name": "MICRO OMNIBUS SUR S.A.C.",
    "agency_id": 64,
    "route_short_name": "160B",
    "tip_id": "56253-1",
    "trip_headsign": "C - Est. Lanus"
  },
  {
    "route_id": "888",
    "latitude": -34.80956,
    "longitude": -58.33566,
    "speed": 10.2777767,
    "timestamp": 1708621250,
    "id": "12866",
    "direction": 1,
    "agency_name": "MICRO OMNIBUS SUR S.A.C.",
    "agency_id": 64,
    "route_short_name": "160D",
    "tip_id": "59011-1",
    "trip_headsign": "a Pontevedra - Est.Merlo"
  },
  {
    "route_id": "868",
    "latitude": -34.81856,
    "longitude": -58.34492,
    "speed": 10.5555553,
    "timestamp": 1708621250,
    "id": "12867",
    "direction": 0,
    "agency_name": "MICRO OMNIBUS SUR S.A.C.",
    "agency_id": 64,
    "route_short_name": "160C",
    "tip_id": "57261-1",
    "trip_headsign": "Las Cabañas - IDA"
  },
  {
    "route_id": "869",
    "latitude": -34.81616,
    "longitude": -58.3305054,
    "speed": 0,
    "timestamp": 1708621252,
    "id": "12885",
    "direction": 1,
    "agency_name": "MICRO OMNIBUS SUR S.A.C.",
    "agency_id": 64,
    "route_short_name": "160C",
    "tip_id": "57295-1",
    "trip_headsign": "Las Cabañas - VUELTA"
  },
  
  {
    "route_id": "623",
    "latitude": -34.64956,
    "longitude": -58.37369,
    "speed": 6.944444,
    "timestamp": 1708621848,
    "id": "6706",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98E",
    "tip_id": "41603-1",
    "trip_headsign": "5 a Villa España"
  },
  {
    "route_id": "618",
    "latitude": -34.7049,
    "longitude": -58.291214,
    "speed": 6.944444,
    "timestamp": 1708621846,
    "id": "6707",
    "direction": 1,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98B",
    "tip_id": "41164-1",
    "trip_headsign": "a Once"
  },
  {
    "route_id": "622",
    "latitude": -34.77306,
    "longitude": -58.20014,
    "speed": 2.222222,
    "timestamp": 1708621846,
    "id": "6713",
    "direction": 1,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98D",
    "tip_id": "41511-1",
    "trip_headsign": "a Once"
  },
  {
    "route_id": "624",
    "latitude": -34.76935,
    "longitude": -58.1938,
    "speed": 0,
    "timestamp": 1708621846,
    "id": "6714",
    "direction": 1,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98E",
    "tip_id": "41736-1",
    "trip_headsign": "a Once"
  },
  {
    "route_id": "626",
    "latitude": -34.68042,
    "longitude": -58.3369942,
    "speed": 4.444444,
    "timestamp": 1708621846,
    "id": "6717",
    "direction": 1,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98F",
    "tip_id": "42081-1",
    "trip_headsign": "a Once"
  },
  {
    "route_id": "625",
    "latitude": -34.62098,
    "longitude": -58.38082,
    "speed": 0,
    "timestamp": 1708621846,
    "id": "6719",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98F",
    "tip_id": "41888-1",
    "trip_headsign": "116 a B° Gráfico"
  },
  {
    "route_id": "619",
    "latitude": -34.7378,
    "longitude": -58.2934456,
    "speed": 8.888888,
    "timestamp": 1708621846,
    "id": "6725",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98C",
    "tip_id": "41248-1",
    "trip_headsign": "3 (Negro) Alpargatas"
  },
  {
    "route_id": "621",
    "latitude": -34.77029,
    "longitude": -58.1983452,
    "speed": 1.111111,
    "timestamp": 1708621846,
    "id": "6726",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98D",
    "tip_id": "41430-1",
    "trip_headsign": "1 a Pte. Saavedra x Viaducto"
  },
  
  {
    "route_id": "621",
    "latitude": -34.77828,
    "longitude": -58.24034,
    "speed": 0.555555,
    "timestamp": 1708621846,
    "id": "7562",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98D",
    "tip_id": "41431-1",
    "trip_headsign": "1 a Pte. Saavedra x Viaducto"
  },
  {
    "route_id": "620",
    "latitude": -34.76493,
    "longitude": -58.2746544,
    "speed": 7.5,
    "timestamp": 1708621846,
    "id": "7582",
    "direction": 1,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98C",
    "tip_id": "41360-1",
    "trip_headsign": "a Once"
  },
  {
    "route_id": "619",
    "latitude": -34.61321,
    "longitude": -58.40415,
    "speed": 0,
    "timestamp": 1708621846,
    "id": "7596",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98C",
    "tip_id": "41255-1",
    "trip_headsign": "3 (Negro) Alpargatas"
  },
  {
    "route_id": "621",
    "latitude": -34.74123,
    "longitude": -58.2853661,
    "speed": 8.055555,
    "timestamp": 1708621846,
    "id": "8041",
    "direction": 0,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98D",
    "tip_id": "41432-1",
    "trip_headsign": "1 a Pte. Saavedra x Viaducto"
  },
  {
    "route_id": "622",
    "latitude": -34.71309,
    "longitude": -58.3081551,
    "speed": 1.111111,
    "timestamp": 1708621852,
    "id": "10250",
    "direction": 1,
    "agency_name": "EXPRESO QUILMES S.A.",
    "agency_id": 62,
    "route_short_name": "98D",
    "tip_id": "41507-1",
    "trip_headsign": "a Once"
  },
]



for(let i = 0; i< colectivos.length; i++) {
  let agencia = colectivos[i].agency_id
console.log(agencia);
} 
console.log(colectivos.length)

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
          <option value="62">62 </option>
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
