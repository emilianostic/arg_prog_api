# Página web con datos climáticos y meteorológicos de Paraná Entre Ríos con React

Las funcionalidades y manipulación de los datos se realizaron con Javascript y fue diseñado en componentes de React

## Comenzando 

Los archivos de este proyecto se pueden descargar de  https://github.com/emilianostic/arg_prog_api/

Los datos climáticos y meteorológicos se obtubieron de un JSON que se colocó en el archivo data. Los componentes lo van importando (a data.js) y toman los datos necesarios de acuerdo a la información que necesitan renderizar.
El componente TempDay contiene al componente Graphic que tiene la distribución x-y de la temperaturas durante las horas del día, el componente MeteoCards contiene a todos los componentes cuyos nombres comienzan con Card..., el componente ActualTemp tiene la temperatura actual y el estado del cielo, el componente TempMaxMin tiene las temperaturas máximas y la fecha actual. El componente App es el que importa a los componentes antes mencionados para que luego sean renderizados.
Para el gráfico se utilizó la biblioteca chartsjs.
Se realizó una hoja de estilos de CSS (styles.css) para darle el mismo a los elementos contenedores de los componentes. En los componentes se utilizó styled components.
Las imagenes utilizadas, se trataron como fonts ya que son emojis de whatsapp.

### Aclaraciones según la consigna 🔧

Los componentes se renderizan hacia la mitad izquierda del navegador ya que se deja la otra midad para la otra parte del proyecto. Se colocaron los elementos html para que no se pueda realizar scroll. Por ahora no se plantea que sea responsive.
Se utiliza el inglés para familiarizarme con el mismo.


## Ejecutando pruebas ⚙️
Si se cambia el tamaño del navegador o se renderiza en un dispositivo de pantalla pequeña como un celular, se pierde el diseño.

Mejoras: hacerlo responsive, ver colores y tipo de gráfico. 
Considerar las posiciones de los componentes.


## Construido con 🛠️
* React - https://es.react.dev/
* Open Meteo -  https://open-meteo.com/
* Whatsapp - Imagenes (emojis) de los componentes 
* Charts.js - https://www.chartjs.org/
* Styled Components - https://styled-components.com/

## Autores ✒️

* **Emiliano Velázquez** 

---
⌨️ con ❤️ por [@emilianostic](https://github.com/emilianostic/sobre-mi/) 😊
