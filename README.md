# Página web con datos meteorológicos de seis ciudades (Madrid, Hasenkamp, Paraná, San Benito, Neuquén, Gualeguay) y dos barrios de Capital Federal de Argentina (Caballito y Parque Patricios). Y el seguimiento de la posición de los vehículos de algunas líneas de colectivos del ANBA con React

Las funcionalidades y manipulación de los datos se realizaron con Javascript y fue diseñado en componentes de React

## Comenzando 

Los archivos de este proyecto se pueden descargar de  https://github.com/emilianostic/arg_prog_api/

* Los datos climáticos y meteorológicos se obtienen de una API (open-meteo.com) que se obtienen en el archivo FetchData.jsx. Para no tener que ir pasando las prop de componente en componente, se crea un contexto (/context/DataContext.jsx) del cual los componentes pueden tomar los datos directamente.
El componente TempDay contiene al componente Graphic que tiene la distribución x-y de la temperaturas durante las horas del día, el componente MeteoCards contiene a todos los componentes cuyos nombres comienzan con Card... que están dentro de una carpeta "cards" y es donde se manipulan antes de ser exportados al App.js, el componente ActualTemp tiene la temperatura actual y el estado del cielo, el componente TempMaxMin tiene las temperaturas máximas y la fecha actual. Se crean los componentes MaxTempMinTemp y ActualTempSky para manipular los datos de los componentes TempMaxMin y ActualTemp antes de importarlos al App.js, en el componente ActualTempSky se crea el objeto weatherCodeInfo para indexarlo con el weathercode que viene de la API y así poder ir camiando el estado del cielo y el emoji de acuerdo al mismo. También se crea el coponente LoadingComponent para mostrar un mensaje "Cargando..." cuando todavía no han cargado los datos de la API. Se agregan estilos para que el fondo de pantalla se modifique de acuerdo a las condiciones del tiempo. Se coloca un selector para elegir la ciudad de la cual deseamos ver las condiciones del tiempo.
X.
Para el gráfico se utilizó la biblioteca chartsjs.
Se realizó una hoja de estilos de CSS (styles.css) para darle el mismo a los elementos contenedores de los componentes. En los componentes se utilizó styled components.
Las imagenes utilizadas, se trataron como fonts ya que son emojis de whatsapp.


* Para la aplicación de la posición de los colectivos se crea un contexto, TrafficContext.jsx de donde el componente Map obtiene los datos. En Map se realiza el pedido a la API de acuerdo a la elección al número de línea de colectivo, inddicando con un pin la posición de las unidades en el mapa. 



### Aclaraciones según la consigna 🔧

Los componentes de la parte meteorológica se renderizan hacia la mitad izquierda del navegador, la otra mitad es para la aplicación de los colectivos. Se colocaron los elementos html para que no se pueda realizar scroll.

Por ahora no se plantea que sea responsive.
Se utiliza el inglés para familiarizarme con el mismo.
Las líneas 103 y 105 no responden con datos al pedido, igualmente se dejan en el selector.


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
