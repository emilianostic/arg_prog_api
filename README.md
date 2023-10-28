# Página web con datos meteorológicos de Paraná Entre Ríos y seguimiento de la Agency 63 de colectivos del ANBA con React

Las funcionalidades y manipulación de los datos se realizaron con Javascript y fue diseñado en componentes de React

## Comenzando 

Los archivos de este proyecto se pueden descargar de  https://github.com/emilianostic/arg_prog_api/

* Los datos climáticos y meteorológicos se obtienen de una API (open-meteo.com) que se obtienen en el archivo FetchData.jsx. Para no tener que ir pasando las prop de componente en componente, se crea un contexto (/context/DataContext.jsx) del cual los componentes pueden tomar los datos directamente.
El componente TempDay contiene al componente Graphic que tiene la distribución x-y de la temperaturas durante las horas del día, el componente MeteoCards contiene a todos los componentes cuyos nombres comienzan con Card... que están dentro de una carpeta "cards" y es donde se manipulan antes de ser exportados al App.js, el componente ActualTemp tiene la temperatura actual y el estado del cielo, el componente TempMaxMin tiene las temperaturas máximas y la fecha actual. Se crean los componentes MaxTempMinTemp y ActualTempSky para manipular los datos de los componentes TempMaxMin y ActualTemp antes de importarlos al App.js, en el componente ActualTempSky se crea el objeto weatherCodeInfo para indexarlo con el weathercode que viene de la API y así poder ir camiando el estado del cielo y el emoji de acuerdo al mismo. También se crea el coponente LoadingComponent para mostrar un mensaje "Cargando..." cuando todavía no han cargado los datos de la API.
X.
Para el gráfico se utilizó la biblioteca chartsjs.
Se realizó una hoja de estilos de CSS (styles.css) para darle el mismo a los elementos contenedores de los componentes. En los componentes se utilizó styled components.
Las imagenes utilizadas, se trataron como fonts ya que son emojis de whatsapp.


* Para la aplicación de la posición de los colectivos se crea un contecto, TrafficContext.jsx de donde el componente Map obtiene los datos, a su vez el contexto importa los datos de la API desde FetchDataTraffic que es donde se realiza el fetch. Se realiza un useEffect para que la posición de los colecttivos se muestre cada 31 segundos.



### Aclaraciones según la consigna 🔧

Los componentes de la parte meteorológica se renderizan hacia la mitad izquierda del navegador, la otra mitad es para la aplicación de los colectivos. Se colocaron los elementos html para que no se pueda realizar scroll.
En la parte del seguimiento del al Agency 63, solo se deja un select sin funcionalidad para continuar luego de la fecha de entrega con el seguimiento de los colectivos de la línea de acuerdo al destino final, junto con las demás consideraciones opcionales dadas en la consigna.

Los componentes 
Por ahora no se plantea que sea responsive.
Se utiliza el inglés para familiarizarme con el mismo.



## Ejecutando pruebas ⚙️
Si se cambia el tamaño del navegador o se renderiza en un dispositivo de pantalla pequeña como un celular, se pierde el diseño.

Mejoras: hacerlo responsive, ver colores y tipo de gráfico. 
Considerar las posiciones de los componentes. 
Cambiar el nombre del contexto que tiene los datos meteorológicos con un nombre más intuitivo.


## Construido con 🛠️
* React - https://es.react.dev/
* Open Meteo -  https://open-meteo.com/
* Whatsapp - Imagenes (emojis) de los componentes 
* Charts.js - https://www.chartjs.org/
* Styled Components - https://styled-components.com/
* API de transporte de la Ciudad de Buenos Aires.  https://buenosaires.gob.ar/desarrollourbano/transporte/apitransporte
* Leaflet https://react-leaflet.js.org/
## Autores ✒️

* **Emiliano Velázquez** 

---
⌨️ con ❤️ por [@emilianostic](https://github.com/emilianostic/sobre-mi/) 😊
