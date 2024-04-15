import styled from "styled-components";
import { DivCardUV, DivTextUV } from "./CardUV";

const DivCardSunriseSunset = styled(DivCardUV)``;
const DivTextunriseSunset = styled(DivTextUV)``;

const RiseSetStyled = styled.p`
  font-size: 150%;
  text-align: center;
  &:hover {
    transform: scale(1.3);
  }
`;

const sunriseSunset = {
  riseSet: {
    name: "SUNRISE/SUNSET",
    iconRise: "☀️",
    iconSet: "🌙",
  },
};

const cardSunriseSunset = ({ sunrise, sunset }) => {
  return (
    <>
      <DivCardSunriseSunset>
        <DivTextunriseSunset>
          <h3>{sunriseSunset.riseSet.name}</h3>
          <p>{sunrise}</p>
          <RiseSetStyled> {sunriseSunset.riseSet.iconRise}</RiseSetStyled>
          <RiseSetStyled> {sunriseSunset.riseSet.iconSet}</RiseSetStyled>
          <p>{sunset}</p>
        </DivTextunriseSunset>
      </DivCardSunriseSunset>
    </>
  );
};
export default cardSunriseSunset;
