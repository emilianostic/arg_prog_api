import styled from "styled-components";

const DivTempMaxMin = styled.div`
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  background-size: cover;
  margin: 1%;

  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
 
  }
`;
const DivMaxMin = styled.div`
  background: #ffd600;
  width: 50%;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border: none;
  border-radius: 100px;
  font-family: "Roboto", sans-serif;
`;

const tempMaxMin = ({ minTemperature_2m, maxTemperature_2m, dateFormat }) => {
  return (
    <DivTempMaxMin>
      <h3>{dateFormat}</h3>

      <DivMaxMin>
        <p>{maxTemperature_2m}°C</p>
        <p>High</p>
      </DivMaxMin>
      <DivMaxMin>
        <p>{minTemperature_2m}°C</p>
        <p>Low</p>
      </DivMaxMin>
    </DivTempMaxMin>
  );
};
export default tempMaxMin;
