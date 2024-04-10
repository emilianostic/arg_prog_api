import { useWeather } from "../context/WeatherDataContext";

const LoadingCard = () => {
  const { loading } = useWeather();
  return (
    <>
      <div loading={loading}>Cargando...</div>
    </>
  );
};
export default LoadingCard;
