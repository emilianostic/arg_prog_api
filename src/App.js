import "./styles.css";
//import TempDay from "./components/TempDay";
//import MeteoCards from "./components/MeteoCards";
import { WeatherDataContextProvider } from "./context/WeatherDataContext";
//import MaxTempMinTemp from "./components/MaxTempMinTemp";
//import TempSky from "./components/ActualTempSky";
import BackWeather from "./components/BackWeather";
import Map from  "./transport/Map"
import { TrafficContextProvider } from "./transport/TrafficContext";
import CitySelect from "./components/CitySelector";

function App() {
  return (
    <>
   
      <div className="container">

        <WeatherDataContextProvider>
        <CitySelect/>
         <BackWeather/>
        </WeatherDataContextProvider>

        <TrafficContextProvider>
          <div className="traffic">
            <Map />
          </div>
        </TrafficContextProvider> 
      </div>
    </>
  );
}

export default App;
