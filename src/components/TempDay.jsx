import styled from "styled-components"
import TemperatureChart from "./Graphic";
//import data from "./data"
import { useWeather } from "../context/WeatherDataContext";	
import "../styles.css";

const DivTempDay = styled.div`
margin: 1% 3.5% 2% 0%; 
	border-radius: 10px;
	background-color: rgb(226, 226, 213);
	width: 100%;
	font-weight: bold;
	
	position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: center center;
`

let formattedHours= "";

const TempDay = () => {
	const { hourlyTime, dailyTemp} = useWeather();
	
	if(hourlyTime){
		formattedHours = hourlyTime.map(hourlyTime => {
			const date = new Date(hourlyTime);
			const hours = String(date.getHours()).padStart(2, '0');
			const minutes = String(date.getMinutes()).padStart(2, '0');
			return `${hours}:${minutes}`;
		  });
}
return(<>
 
<DivTempDay> 
<TemperatureChart className="temperature" hourlyTime={formattedHours}  dailyTemp={dailyTemp}/>
</DivTempDay>


</>
)}
export default TempDay
