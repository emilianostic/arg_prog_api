import styled from "styled-components";
//import data from "./data"


export const DivCardUV = styled.div`
  border-radius: 5%;
  background-color: rgb(107, 168, 221);
  height: 100%;
  font-weight: bold;
  padding: 10%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
`;
export const DivTextUV = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UVStyled = styled.p`
  font-size: 200%;
  text-align: center;
`;

//const UVdata = data["daily"]["uv_index_clear_sky_max"];

const UVsign = {
  uno: {
    name: "UV INDEX",
    icon: "⛱️",
  },
};

const CardUV = ({uvIndexMax}) => {

  return (
    <DivCardUV>
      <DivTextUV>
        <h3>{UVsign.uno.name}</h3>
        <UVStyled>{UVsign.uno.icon}</UVStyled>
        <p>{uvIndexMax}</p>
      </DivTextUV>
    </DivCardUV>
  );
};

export default CardUV;
