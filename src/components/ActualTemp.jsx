import styled from "styled-components";

export const DivCardActualTemp = styled.div`
  font-weight: bold;
  position: relative;
  text-align: center;
  margin: 7.5%;
  width: 60%;
  
  }
`;
const PActualTemp = styled.p`
  font-size: 400%;
`;

const CardActualTemp = ({ actualTemp, weatherCode, weatherCode2 }) => {
  console.log(weatherCode);
  return (
    <DivCardActualTemp>
      <h3>{weatherCode2}</h3>
      <PActualTemp>{weatherCode}</PActualTemp>
      <p>{actualTemp} °C</p>
    </DivCardActualTemp>
  );
};

export default CardActualTemp;
