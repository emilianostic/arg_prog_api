import styled from "styled-components";
import { DivCardUV, DivTextUV } from "./CardUV";
import data from "./data";
const DivCardSunriseSunset = styled(DivCardUV)``;
const DivTextunriseSunset = styled(DivTextUV)``;

const RiseSetStyled = styled.p`
font-size: 40px;
text-align: center;
`

const sunriseSunset = {
  riseSet : {
    "name": "SUNRISE/SUNSET",
    "iconRise": "🌅",
    "iconSet": "🌄"
  }
}

const dayHourRise = data["daily"]["sunrise"];
console.log(dayHourRise)
const horaRise = dayHourRise.toString()
const formatHoraRise = horaRise.slice(11, 16)

const dayHourSet = data["daily"]["sunset"];

const horaSet = dayHourSet.toString()
const formatHoraSet = horaSet.slice(11, 16)



const cardSunriseSunset = () => {
  return (
    <>
      <DivCardSunriseSunset>
        <DivTextunriseSunset>
          <h3>{sunriseSunset.riseSet.name}</h3>
          <p>{formatHoraRise}</p>
          <RiseSetStyled> {sunriseSunset.riseSet.iconRise}</RiseSetStyled>
          <RiseSetStyled> {sunriseSunset.riseSet.iconSet}</RiseSetStyled>
          <p>{formatHoraSet}</p>
        </DivTextunriseSunset>
      </DivCardSunriseSunset>
    </>
  );
};
export default cardSunriseSunset;
