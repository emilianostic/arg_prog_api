import styled from "styled-components"
import TemperatureChart from "../components/Graphic"
import data from "./data"


const DivTempDay = styled.div`
margin: 0% 3.8% 2% 0%;
	border-radius: 10px;
	background-color: rgb(226, 226, 213);
	width: 80%;
	font-weight: bold;
	
	position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: center center;
`
const tempDay = () => {

return(<>
 
<DivTempDay> 
<TemperatureChart data={data} />
</DivTempDay>


</>
)}
export default tempDay