import styled from "styled-components"
import { DivCardUV, DivTextUV } from "./CardUV"
import data from "./data"

const DivCardRainProbability = styled(DivCardUV)`

`
const DivTextRainProbability = styled(DivTextUV)`

`
const RainProbabilityStyled = styled.p`
font-size: 300%;
text-align: center;
`
const RainProbabilitySymbol = {
	uno : {
		"name": "RAIN PROBABILITY",
		"icon": "☔"
	},
}


const hourlyRainProbability= data["hourly"]["precipitation_probability"];
const addRainProbability  = hourlyRainProbability.reduce((acumulador, valor) => acumulador + valor, 0);

const rainProbabilityAverage = Math.round(addRainProbability/hourlyRainProbability.length)

const cardRainProbability = () =>{
    return(<>

<DivCardRainProbability>
<DivTextRainProbability>
<h3>{RainProbabilitySymbol.uno.name}</h3>
<RainProbabilityStyled>{RainProbabilitySymbol.uno.icon}</RainProbabilityStyled>
    <p>{rainProbabilityAverage} %</p>
    
              
</DivTextRainProbability>
</DivCardRainProbability>

</>);
}
export default cardRainProbability