import TempMaxMin from "./TempMaxMin";
import { useWeather } from "../context/DataContext";

let maxTemperature = "";
let minTemperature = ""

let options = "";
let formattedDate = ""

const MaxTempMinTemp = () => {
    const { minTemperature_2m, maxTemperature_2m, dateFormat } = useWeather();

    if(maxTemperature_2m){
        maxTemperature = maxTemperature_2m[0]
        
        for (let i = 1; i < maxTemperature_2m.length; i++) {
          if (maxTemperature_2m[i] > maxTemperature) {
            maxTemperature = maxTemperature_2m[i];
          }
        }
        
        minTemperature = minTemperature_2m[0]
        for (let i = 1; i < minTemperature_2m.length; i++) {
          if (minTemperature_2m[i] < minTemperature) {
            minTemperature = minTemperature_2m[i];
          }
        }
      }

      if(dateFormat){
        const dateObj = new Date(dateFormat);
      
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = dateObj.toLocaleDateString('en-US', options);
        }

  return (<>
  
  <TempMaxMin minTemperature_2m={minTemperature} maxTemperature_2m={maxTemperature} dateFormat={formattedDate}/>
  
  </>
   
  );
};
export default MaxTempMinTemp;
