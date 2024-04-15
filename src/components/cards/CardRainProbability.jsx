import styled from "styled-components";
import { DivCardUV, DivTextUV } from "./CardUV";

const DivCardRainProbability = styled(DivCardUV)``;
const DivTextRainProbability = styled(DivTextUV)``;
const RainProbabilityStyled = styled.p`
  font-size: 220%;
  text-align: center;
  &:hover {
    transform: scale(1.3);
  }
`;
const RainProbabilitySymbol = {
  uno: {
    name: "RAIN PROBABILITY",
    icon: "☔",
  },
};

const cardRainProbability = ({ rainProbability }) => {
  return (
    <>
      <DivCardRainProbability>
        <DivTextRainProbability>
          <h3>{RainProbabilitySymbol.uno.name}</h3>
          <RainProbabilityStyled>
            {RainProbabilitySymbol.uno.icon}
          </RainProbabilityStyled>
          <p>{rainProbability} %</p>
        </DivTextRainProbability>
      </DivCardRainProbability>
    </>
  );
};
export default cardRainProbability;
