import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
//import dataTraffic from './DataTraffic'
import { useTraffic } from "./TrafficContext";

//import { useState} from 'react';

const Map = () => {
  const { dataTraffic } = useTraffic();
  console.log(dataTraffic);

  /* if(dataTraffic){
  lat = dataTraffic[0].latitude
  long = dataTraffic[0].longitude
} */

  return (
    <>
      <MapContainer
        center={[-34.64657, -58.59802]}
        zoom={12}
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
                  Line {data.agency_id} <br />
                  Velocity {Math.round(data.speed)}
                  <br />
                  Destiny {data.trip_headsign}
                  <br />
                  ID {data.id}
                </Popup>
              </Marker>{" "}
            </>
          );
        })}
      </MapContainer>
    </>
  );
};
export default Map;
