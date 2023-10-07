import styled from "styled-components"
import TemperatureChart from "../components/Graphic"
import data from "./data"


const DivTempDay = styled.div`
margin: 0% 3.8% 2% 0%;
	border-radius: 10px;
	background-color: rgb(226, 226, 213);
	width: 80vh;
	height: 35vh;
	font-weight: bold;
	display: flex;
	items-align: center;
	position: relative;
`
const tempDay = () => {

return(<>
 
<DivTempDay> 
<TemperatureChart data={data} />
</DivTempDay>


</>
)}
export default tempDay