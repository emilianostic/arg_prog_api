import styled from "styled-components"
import { DivCardUV, DivTextUV } from "./CardUV"
import data from "./data"
const DivCardVisibility = styled(DivCardUV)`

`
const DivTextVisibility = styled(DivTextUV)`

`
const VisibilityStyled = styled.p`
font-size: 300%;
text-align: center;
`
const visibilitySymbol = {
	uno : {
		"name": "VISIBILITY",
		"icon": "👁️‍🗨️"
	},
}


const hourlyVisibility= data["hourly"]["visibility"];
const addVisibility  = hourlyVisibility.reduce((acumulador, valor) => acumulador + valor, 0);

const visibilityAverage = Math.round(addVisibility/hourlyVisibility.length)


const cardVisibility = () =>{
    return(<>

<DivCardVisibility>
<DivTextVisibility>
<h3>{visibilitySymbol.uno.name}</h3>
    <VisibilityStyled>{visibilitySymbol.uno.icon}</VisibilityStyled>
    <p>{visibilityAverage} m</p>

              
</DivTextVisibility>
</DivCardVisibility>

</>);
}
export default cardVisibility