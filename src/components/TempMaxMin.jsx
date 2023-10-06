import styled from "styled-components";
import data from "./data";
const DivTempMaxMin = styled.div`
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  background-size: cover;
  margin: 1%;
  background-color: beige;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const DivMaxMin = styled.div`
  background: #ffd600;
  width: 50%;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border: none;
  border-radius: 100px;
  font-family: "Roboto", sans-serif;
`;

const objectDay = {
  1: {
    "name": "Wednesday",
    "date": "October 4"
  }
};

const weekDay = data["current_weather"]["is_day"]
const tempMaxMin = () => {

const temperature = data.hourly.temperature_2m


let maxTemperature = temperature[0]

for (let i = 1; i < temperature.length; i++) {
  if (temperature[i] > maxTemperature) {
    maxTemperature = temperature[i];
  }
}

let minTemperature = temperature[0]
for (let i = 1; i < temperature.length; i++) {
  if (temperature[i] < minTemperature) {
    minTemperature = temperature[i];
  }
}


  return (
    <DivTempMaxMin>
      <h3>{objectDay[weekDay].name}</h3>
      <h4>{objectDay[weekDay].date}</h4>
      <DivMaxMin>
        <p>{maxTemperature}°C</p>
        <p>High</p>
      </DivMaxMin>
      <DivMaxMin>
        <p>{minTemperature}°C</p>
        <p>Low</p>
      </DivMaxMin>
    </DivTempMaxMin>
  );
};
export default tempMaxMin;
