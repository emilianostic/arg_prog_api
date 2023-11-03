import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import { useTraffic } from "./TrafficContext";


let filteredPositions = "";
const Map = () => {
  const { dataTraffic, selectedDestiny } = useTraffic();
  console.log(dataTraffic);
 console.log(selectedDestiny) 
  

const handlerOnChange = (selectedDestiny) =>{
// Filtrar las posiciones según el destino seleccionado
/* filteredPositions = dataTraffic.filter((data) => data.trip_headsign === selectedDestiny);

// Puedes hacer lo que necesites con las posiciones filtradas.
console.log(filteredPositions);
// Por ejemplo, puedes almacenarlas en el estado local si las necesitas en el componente. */

} 



  return (
    <>
   <select onChange={(e)=> handlerOnChange(e.target.value)}>{dataTraffic.map((item, index) =>
    <option key={index}>{item.trip_headsign}</option>
    )}

    </select> 
      <MapContainer
        center={[-34.78661, -58.2494]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataTraffic.map((data, index) =>  {
          return (
            <>
              <Marker position={[data.latitude, data.longitude]} key={index}>
                <Popup >
                <span role="img" aria-label="emoji"> 🚌 </span> <br/>
                  Line {data.agency_id} <br />
                  Velocity {Math.round(data.speed)}
                  <br />
                  Destiny {data.trip_headsign}
                  <br />
                  ID {data.id}<br/>
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
