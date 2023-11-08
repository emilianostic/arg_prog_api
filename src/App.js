import "./styles.css";
import TempDay from "./components/TempDay";
import MeteoCards from "./components/MeteoCards";
import { WeatherDataContextProvider } from "./context/WeatherDataContext";
import MaxTempMinTemp from "./components/MaxTempMinTemp";
import TempSky from "./components/ActualTempSky";
/* import Map from "./transport/Map";
import { TrafficContextProvider } from "./transport/TrafficContext"; */
import BackWeather from "./components/BackWeather";

function App() {
  return (
    <>
      <div className="container">
        <div className="backgroundWeather">
          <WeatherDataContextProvider>
            <BackWeather>
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
            </BackWeather>
          </WeatherDataContextProvider>
        </div>

        {/* <TrafficContextProvider>
          <div className="traffic">
            <Map />
          </div>
        </TrafficContextProvider> */}
      </div>
    </>
  );
}

export default App;
