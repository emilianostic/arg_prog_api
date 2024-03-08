const FetchDataTraffic = () => {
  //coloco la línea 62
  return fetch(
    'https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=62&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6'
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      console.error(ex);
    });
};

export default FetchDataTraffic;
