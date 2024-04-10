import styled from "styled-components";
import { DivCardUV, DivTextUV } from "./CardUV";

const DivCardVisibility = styled(DivCardUV)``;
const DivTextVisibility = styled(DivTextUV)``;
const VisibilityStyled = styled.p`
  font-size: 200%;
  text-align: center;
`;
const visibilitySymbol = {
  uno: {
    name: "VISIBILITY",
    icon: "👁️‍🗨️",
  },
};

const cardVisibility = ({ hourlyVisibility }) => {
  return (
    <>
      <DivCardVisibility>
        <DivTextVisibility>
          <h3>{visibilitySymbol.uno.name}</h3>
          <VisibilityStyled>{visibilitySymbol.uno.icon}</VisibilityStyled>
          <p>{hourlyVisibility} m</p>
        </DivTextVisibility>
      </DivCardVisibility>
    </>
  );
};
export default cardVisibility;
