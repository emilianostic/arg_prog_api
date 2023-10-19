//import logo from './logo.svg';
import "./styles.css";
//import Cards from './components/Cards'
import TempDay from "./components/TempDay";
import MeteoCards from "./components/MeteoCards";
//import TempMaxMin from "./components/TempMaxMin";
//import CardActualTemp from "./components/ActualTemp";
import { DataContextProvider } from './context/DataContext'
import MaxTempMinTemp from "./components/MaxTempMinTemp";
import TempSky from "./components/ActualTempSky";


function App() {
 
  return (<>
  <DataContextProvider> 
    <div className="container">
      <div className="weather">
        <div className="temps">
        <TempSky />
        <TempDay />
        </div>
        
        <div className="meteorology">
          <MaxTempMinTemp/>
          
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
    </DataContextProvider>
    
    </>);
}

export default App;
