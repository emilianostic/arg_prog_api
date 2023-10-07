import styled from "styled-components"
import { DivCardUV, DivTextUV } from "./CardUV"
import data from "./data"

export const IconStyled = styled.h2`
font-size: 300%;
text-align: center;
`
const DivCardWind = styled(DivCardUV)`

`
const DivTextWind = styled(DivTextUV)`

`

const weather_code_opcionA = {
    2: {
        "name": "WIND STATUS",
        "icono": "🌬️"
    }
};

const curr_weather_code = data["current_weather"]["windspeed"];

const cardWind = () =>{
    return(<>

<DivCardWind>
<DivTextWind>
<h3>{weather_code_opcionA[2].name}</h3>
<IconStyled>{weather_code_opcionA[2].icono}</IconStyled> 

<p>{curr_weather_code} {data.hourly_units.windspeed_10m}</p>
              
</DivTextWind>
</DivCardWind>

</>);
}
export default cardWind