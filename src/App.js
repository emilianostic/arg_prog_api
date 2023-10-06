//import logo from './logo.svg';
import "./styles.css";
//import Cards from './components/Cards'
import TempDay from "./components/TempDay";
import MeteoCards from "./components/MeteoCards";
import TempMaxMin from "./components/TempMaxMin";
import CardActualTemp from "./components/ActualTemp";
function App() {
  return (
    <div className="container">
      <div className="weather">
        <div className="temps">
        <CardActualTemp />
        <TempDay />
        </div>
        <div className="meteorology">
          <TempMaxMin />
          <MeteoCards />
        </div>
      </div>
      {/* <div className="traffic">
        <TempDay />
        <div className="meteorology">
          <TempMaxMin />
          <MeteoCards />
        </div>
      </div> */}
    </div>
  );
}

export default App;
