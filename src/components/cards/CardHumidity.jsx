import styled from "styled-components"
import { DivCardUV, DivTextUV } from "./CardUV"
//import data from "./data"

const DivCardHumidity = styled(DivCardUV)`

`
const DivTextHumidity = styled(DivTextUV)`

`
const HumidityStyled = styled.p`
font-size: 200%;
text-align: center;
padding: 20%;
`
const humiditySymbol = {
	uno : {
		"name": "HUMIDITY",
		"icon": "💧"
	},
}




const cardHumidity = ({humidity}) =>{



    return(<>

<DivCardHumidity>
<DivTextHumidity>
<h3>{humiditySymbol.uno.name}</h3>
<HumidityStyled>{humiditySymbol.uno.icon}</HumidityStyled>

    <p>{humidity} %</p>
              
</DivTextHumidity>
</DivCardHumidity>

</>);
}
export default cardHumidity