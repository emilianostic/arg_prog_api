import styled from "styled-components";
import CardUV from "./cards/CardUV";
import CardWind from "./cards/CardWind";
import CardSunriseSunset from "./cards/CardSunriseSunset";
import CardHumidity from "./cards/CardHumidity";
import CardVisibility from "./cards/CardVisibility";
import CardRainProbability from "./cards/CardRainProbability";
import { useWeather } from "../context/WeatherDataContext";

const DivContainer = styled.div`
  width: 90%;
  max-width: 90%;
  margin: auto;
  display: grid;
  
`;
const DivContainerCards = styled.div`
  display: grid;
  margin-right: 5%;
  margin-bottom: 2%;
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
`;

const MeteoCards = () => {
  const { uvIndexMax, sunrise, sunset, windStatus, humidity, hourlyVisibility, rainProbability } = useWeather();
  const sunRiseDate = new Date(sunrise);
  const sunRiseHour = `${sunRiseDate.getHours()}:${sunRiseDate.getMinutes()}`;

  const sunSetDate = new Date(sunset);
  const sunSetHour = `${sunSetDate.getHours()}:${sunSetDate.getMinutes()}`;

  

let addHumidity = "";
let humidityMedia = ""
if(humidity){

addHumidity  = humidity.reduce((acumulador, valor) => acumulador + valor, 0);

humidityMedia = Math.round(addHumidity/humidity.length)

}

let addVisibility = "";
let visibilityAverage = "";
if(hourlyVisibility){
addVisibility  = hourlyVisibility.reduce((acumulador, valor) => acumulador + valor, 0);
visibilityAverage = Math.round(addVisibility/hourlyVisibility.length)

} 
let addRainProbability = "";
let rainProbabilityAverage = "";
if(rainProbability){
addRainProbability  = rainProbability.reduce((acumulador, valor) => acumulador + valor, 0);
rainProbabilityAverage = Math.round(addRainProbability/rainProbability.length)
}



  return (
    <DivContainer>
      <DivContainerCards>
        <CardUV uvIndexMax={uvIndexMax} />
        <CardWind windStatus={windStatus} />
        <CardSunriseSunset sunrise={sunRiseHour} sunset={sunSetHour} />
        <CardHumidity humidity={humidityMedia} />
        <CardVisibility hourlyVisibility={visibilityAverage} />
        <CardRainProbability rainProbability={rainProbabilityAverage} />
      </DivContainerCards>
    </DivContainer>
  );
};
export default MeteoCards;
