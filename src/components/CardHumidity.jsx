import styled from "styled-components"
import { DivCardUV, DivTextUV } from "./CardUV"
import data from "./data"

const DivCardHumidity = styled(DivCardUV)`

`
const DivTextHumidity = styled(DivTextUV)`

`
const HumidityStyled = styled.p`
font-size: 300%;
text-align: center;
`
const humiditySymbol = {
	uno : {
		"name": "HUMIDITY",
		"icon": "💧"
	},
}


const hourlyHumidity = data["hourly"]["relativehumidity_2m"];
const addHumedity  = hourlyHumidity.reduce((acumulador, valor) => acumulador + valor, 0);

const humidityMedia = Math.round(addHumedity/hourlyHumidity.length)



const cardHumidity = () =>{
    return(<>

<DivCardHumidity>
<DivTextHumidity>
<h3>{humiditySymbol.uno.name}</h3>
<HumidityStyled>{humiditySymbol.uno.icon}</HumidityStyled>

    <p>{humidityMedia} %</p>
              
</DivTextHumidity>
</DivCardHumidity>

</>);
}
export default cardHumidity