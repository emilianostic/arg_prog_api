import styled from "styled-components"

//import data from "./data"

export const DivCardActualTemp = styled.div`
	background-color: beige;
	font-weight: bold;
	position: relative;
    text-align: center;
    margin: 6.5% 
`
const PActualTemp = styled.p`
font-size: 80px;
`


//const code_sky_status = 1;


const CardActualTemp = ({actualTemp, weatherCode, weatherCode2}) => {
   console.log(weatherCode)
    return(
        <DivCardActualTemp>
          
          <h3>{weatherCode2}</h3>
          <PActualTemp >
          
          {weatherCode}
          </PActualTemp>
       <p>{actualTemp} °C</p>
      </DivCardActualTemp>
    );
}

export default CardActualTemp 