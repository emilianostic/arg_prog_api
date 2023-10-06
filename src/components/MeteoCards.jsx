import styled from "styled-components"
import  CardUV from "./CardUV"
import CardWind from "./CardWind"
import CardSunriseSunset from "./CardSunriseSunset"
import CardHumidity from "./CardHumidity"
import CardVisibility from "./CardVisibility"
import CardRainProbability from "./CardRainProbability"


const DivContainer = styled.div`
width: 90%;
	max-width: 1200px;
	margin: auto;
	display: grid;
	gap: 20px;
`
const DivContainerCards = styled.div`
display: grid;
margin-right: 5%;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`

const meteoCards = () =>{

    return(
        <DivContainer>
        <DivContainerCards>
          <CardUV/>
         <CardWind/>
          <CardSunriseSunset/>
          <CardHumidity/>
          <CardVisibility/>
          <CardRainProbability/>
        </DivContainerCards>
      </DivContainer>
    );

}
export default meteoCards