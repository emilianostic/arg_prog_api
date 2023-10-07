import styled from "styled-components"
import data from "./data"

export const DivCardActualTemp = styled.div`
	background-color: beige;
	font-weight: bold;
	position: relative;
    text-align: center;
    margin: 6.5% 
`
const PActualTemp = styled.p`
font-size: 512%;
`
const weatherCodeInfo = {
    1 : {
        "name": "Sunny",
        "icon": " ☀️"

    }
};

const code_sky_status = data["current_weather"]["weathercode"];
console.log(code_sky_status)

const cardActualTemp = () => {

    return(
        <DivCardActualTemp >
       
          <h3>{weatherCodeInfo[code_sky_status].name}</h3>
          <PActualTemp >☀️</PActualTemp>
       <p>25 °C</p>
      </DivCardActualTemp>
    );
}

export default cardActualTemp 