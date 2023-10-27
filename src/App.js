//import logo from './logo.svg';
import "./styles.css";
//import Cards from './components/Cards'
import TempDay from "./components/TempDay";
import MeteoCards from "./components/MeteoCards";
//import TempMaxMin from "./components/TempMaxMin";
//import CardActualTemp from "./components/ActualTemp";
import { DataContextProvider } from "./context/DataContext";
import MaxTempMinTemp from "./components/MaxTempMinTemp";
import TempSky from "./components/ActualTempSky";
import Map from "./transport/Map";
import { TrafficContextProvider } from "./transport/TrafficContext";

function App() {
  return (
    <>
      <div className="container">
        <DataContextProvider>
          <div className="weather">
            <div className="temps">
              <TempSky />
              <TempDay />
            </div>
            <div className="meteorology">
              <MaxTempMinTemp />
              <MeteoCards />
            </div>
          </div>
        </DataContextProvider>
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
