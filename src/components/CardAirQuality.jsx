import styled from "styled-components"
import { DivCardUV, DivTextUV } from "./CardUV"

const DivCardAirQuality = styled(DivCardUV)`

`
const DivTextAirQuality = styled(DivTextUV)`

`

const cardAirQuality = () =>{
    return(<>

<DivCardAirQuality>
<DivTextAirQuality>
<h3>AIR QUALITY</h3>
    <p>100</p>
    <p>Unhealthy</p>
              
</DivTextAirQuality>
</DivCardAirQuality>

</>);
}
export default cardAirQuality