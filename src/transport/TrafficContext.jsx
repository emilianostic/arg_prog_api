import { createContext, useState, useEffect, useContext } from "react";
import FetchDataTraffic from "./FetchDataTraffic";
import styled from "styled-components"

const TrafficContext = createContext();
const DivLoading = styled.div`
 margin-left: 50%;
  
 
`;


export function TrafficContextProvider({ children }) {
  const [dataTraffic, setDataTraffic] = useState(null);
  const [loading, setLoading] = useState(true);
const[selectedDestiny, setSelectedDestiny] = useState("a Constitución")

  useEffect(() => {
    setLoading(true);
    const fetchTrafficApi = async () => {
      try {
        const data = await FetchDataTraffic();
        setLoading(false);
        setDataTraffic(data);
        setTimeout(() => {
          fetchTrafficApi();
        }, 31000);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchTrafficApi();
  }, []);

  useEffect(() => {

    const fetchDestinyApi = async () => {
      try {
        const data = await FetchDataTraffic();
        console.log(data.trip_headsign )
       
       setSelectedDestiny(data.trip_headsign)
        
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchDestinyApi();
  }, []);

  

  if (loading) {
    return <DivLoading>Cargando...</DivLoading>;
  }

  return (
    <TrafficContext.Provider
      value={{
        dataTraffic,
        loading,
        selectedDestiny,
      }}
    >
      {children}
    </TrafficContext.Provider>
  );
}

export const useTraffic = () => {
  const context = useContext(TrafficContext);
  if (!context) {
    throw new Error("useWeather debe usarse con  WeatherProvider");
  }
  return context;
};
