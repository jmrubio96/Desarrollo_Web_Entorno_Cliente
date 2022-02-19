var baresArena = document.getElementById("baresArena");
var div = document.getElementById("map");

//Funcion loadBar(). Permite cargar baresCordoba.xml y nos lo muestra en una tabla.
function loadBar() {
  baresArena.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x2js = new X2JS();
      var response = x2js.xml_str2json(this.responseText);
      var cadena = "";
      cadena +=
        "<table class='table table-striped'><thead class='thead-dark'><tr><th scope='col'>Centro</th>" +
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
          `<td><button class="btn btn-warning" onClick="mapCor(${element.latitud}, ${element.longitud})">Mapa</button></td></tr>`;
      });
      cadena += "</table>";
      $("#baresArena").append(cadena);
    }
  };
  xhttp.open("GET", "baresArena.xml", true);
  xhttp.send();
}

//Funcion loadCor(). Permite cargar baresCordoba.xml y nos lo muestra en una tabla.
function loadCor() {
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
            `<td><button class="btn btn-warning" onClick="mapBarcor(${element.latitud}, ${element.longitud})">Mapa</button></td></tr>`;
        });
        cadena += "</table>";
        $("#baresArena").append(cadena);
    }
  };
  xhttp.open("GET", "baresCordoba.xml", true);
  xhttp.send();
}
//Funcion loadCentros(). Permite cargar centros.xml y nos lo muestra en una tabla. 
function loadCentros() {
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
          "<th scope='col'>Nombre</th></tr></thead>";
        response.centros.centro.map((element) => {
          cadena +=
            `<tr><td>${element.nombre}</td>` +
            `<td>${element.direccion}</td>` +
            `<td>${element.latitud}</td>` +
            `<td>${element.longitud}</td>` +
            `<td>${element.nombre}</td>` +
            `<td><button class="btn btn-warning" onClick="mapCentros(${element.latitud}, ${element.longitud})">Mapa</button></td></tr>`;
        });
        cadena += "</table>";
        $("#baresArena").append(cadena);
    }
  };
  xhttp.open("GET", "centros.xml", true);
  xhttp.send();
}
//Funcion mapCentros(). Nos muestra la localización de los centros Medac en un mapa.
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

//Funcion mapBarcor(). Nos muestra la localización de los centros Medac en un mapa.
function mapBarcor(lat, lon){
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

//Funcion mapBarcor(). Nos muestra la localización de los centros Medac en un mapa.
function mapCor(lat, lon){
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


