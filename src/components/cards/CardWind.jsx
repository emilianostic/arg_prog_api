import styled from "styled-components";
import { DivCardUV, DivTextUV } from "./CardUV";

export const IconStyled = styled.h2`
  font-size: 200%;
  text-align: center;
`;
const DivCardWind = styled(DivCardUV)``;
const DivTextWind = styled(DivTextUV)``;

const weather_code_opcionA = {
  2: {
    name: "WIND STATUS",
    icono: "🌬️",
  },
};

const cardWind = ({ windStatus }) => {
  return (
    <>
      <DivCardWind>
        <DivTextWind>
          <h3>{weather_code_opcionA[2].name}</h3>
          <IconStyled>{weather_code_opcionA[2].icono}</IconStyled>

          <p>{windStatus} Km/h</p>
        </DivTextWind>
      </DivCardWind>
    </>
  );
};
export default cardWind;
