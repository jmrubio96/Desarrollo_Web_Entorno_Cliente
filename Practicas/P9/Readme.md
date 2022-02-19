# P9

## Objetivos

Vamos crear una página web en la que se muestre un listado de los centros educativos MEDAC en Córdoba. Este listado será obtenido a través de un XML, en el que cada item de la lista tendrá los siguientes datos:
- Nombre.
- Dirección.
- Coordenadas (latitud, longitud).

Una vez se haga clic en uno de los centros, se ha de mostrar en otra parte de la página web, también mediante AJAX, un listado sacado de otro XML con 3 restaurantes/bares cercanos a este. Estos han de tener los siguientes datos:
- Nombre.
- Dirección.
- Coordenadas(latitud, longitud).
- Puntuación Google Maps (máximo 5 estrellas).
Por último, se ha de mostrar mediante una llamada asíncrona a la API de Google Static Maps el mapa de Google Maps representado dentro de la página web con la ubicación del centro de estudios seleccionado.

```python
Función loadBar()
# Con la librería 'x2js' vamos a parsear en formato JSON el archivo XML. Crearemos una petición asíncrona
# y generamos la tabla con todos los elemento sugeridos en la práctica.
function loadBar() {
  baresArena.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x2js = new X2JS();
      var response = x2js.xml_str2json(this.responseText);
      var cadena = "";
      cadena +=
        "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Centro</th>" +
        "<th scope='col'>Dirección</th>" +
        "<th scope='col'>Latitud</th>" +
        "<th scope='col'>Longitud</th>" +
        "<th scope='col'>Nombre</th>" +
        "<th scope='col'>Puntuación</th></tr></thead>";
      response.bares.bar.map((element) => {
        console.log(element);
        cadena +=
          `<tr><td>${element.centro}</td>` +
          `<td>${element.direccion}</td>` +
          `<td>${element.latitud}</td>` +
          `<td>${element.longitud}</td>` +
          `<td>${element.nombre}</td>` +
          `<td>${element.puntuacion}</td>`+
          `<td><button class="btn btn-dark" onClick="mapCor(${element.latitud}, ${element.longitud})">Mapa</button></td></tr>`;
      });
      cadena += "</table>";
      $("#baresArena").append(cadena);
    }
  };
  xhttp.open("GET", "baresArena.xml", true);
  xhttp.send();
```

  ## Reseteo (limpador de div´s)
```python
  baresArena.innerHTML = "";
```
## Mapa
- He usado la API **openlayers**. Le pasaremos por parámetro las dos variables que adquieren longitud y latitud. 
```python
function mapCentros(lat, lon){
  div.innerHTML = "";
    return new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 18
      })
      
    });
  
}
```

