import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import { useTraffic } from "./TrafficContext";



let filteredPositions = "";
const Map = () => {
 const { dataTraffic, selectedDestiny, opcionSeleccionada, datosApi, datosOtraApi  } = useTraffic();

  //console.log(dataTraffic);
 // console.log(selectedDestiny);



  return (
    <>
      <select
        value={opcionSeleccionada}
        onChange={(e) => handlerOnChange(e.target.value)}
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
