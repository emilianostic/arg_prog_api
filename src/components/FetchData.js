

const FetchData = () => { 
    
    return fetch('https://api.open-meteo.com/v1/forecast?latitude=-38.95161&longitude=-68.0591&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility&daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1')
    .then(res => res.json())
    .then(data => {
      
      return data; 
    })
    .catch(ex => {
      console.error(ex);
    
    });
   

}


 export default FetchData