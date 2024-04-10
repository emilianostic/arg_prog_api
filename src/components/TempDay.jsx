import styled from "styled-components";
import TemperatureChart from "./Graphic";
import { useWeather } from "../context/WeatherDataContext";
import "../styles.css";

const DivTempDay = styled.div`
  border-radius: 5%;
  background-color: rgb(226, 226, 213);
  width: 67%;
  height: auto;
  font-weight: bold;
  margin-right: 3.2%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  margin-left: auto; /* Esto justificará el componente a la derecha */
`;

let formattedHours = "";

const TempDay = () => {
  const { hourlyTime, dailyTemp } = useWeather();

  if (hourlyTime) {
    formattedHours = hourlyTime.map((hourlyTime) => {
      const date = new Date(hourlyTime);
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    });
  }
  return (
    <>
      <DivTempDay>
        <TemperatureChart
          className="temperature"
          hourlyTime={formattedHours}
          dailyTemp={dailyTemp}
        />
      </DivTempDay>
    </>
  );
};
export default TempDay;
