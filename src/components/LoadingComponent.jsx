
import { useWeather } from "../context/DataContext";

const LoadingCard = () =>{
    const { loading } = useWeather();
    return(<>

<div loading={loading}>
Cargando...
</div>

</>);
}
export default LoadingCard