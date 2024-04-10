const FetchData = (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility&daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=auto&forecast_days=1`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      console.error(ex);
    });
};

export default FetchData;
