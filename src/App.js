import "./styles.css";
import { WeatherDataContextProvider } from "./context/WeatherDataContext";
import BackWeather from "./components/BackWeather";
import Map from "./transport/Map";
import { TrafficContextProvider } from "./transport/TrafficContext";

function App() {
  return (
    <>
      <div className="container">
        <WeatherDataContextProvider>
          <BackWeather />
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
