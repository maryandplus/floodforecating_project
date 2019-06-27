
//download json wheather forecast
var url = "http://127.0.0.1:5000/api"
console.log(url)

var scenariosDir = '';

// create the OSM layer
var map = L.map('map', {
  center: [55.6694, 12.5893],
  zoom: 12
});

var osm = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);


function getLayerFromFile(fileName, time) {
  let options = {
    style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
  };
  if (time) {
    options.time = time;
  }
  return new L.GeoJSON.AJAX(fileName, options);
}
//read scenarios from folder
const FILES = {
  DEFAULT: 'selected_bs_touch_buildings2.geojson',
  FILE_1: `${scenariosDir}/bs30mm.geojson`,
  FILE_2: `${scenariosDir}/bs40mm.geojson`,
  FILE_3: `${scenariosDir}/bs50mm.geojson`,
  FILE_4: `${scenariosDir}/bs60mm.geojson`,
  FILE_5: `${scenariosDir}/bs70mm.geojson`,
  FILE_6: `${scenariosDir}/bs80mm.geojson`,
  FILE_7: `${scenariosDir}/bs90mm.geojson`,
  FILE_8: `${scenariosDir}/bs100mm.geojson`,
  FILE_9: `${scenariosDir}/bs110mm.geojson`
};

// create the map with the layer
//set basemaps and overlays
var basemaps = {"OpenStreetMap": osm}



// add the scale bar
L.control.scale().addTo(map);

L.control.layers(basemaps).addTo(map);

//read wheather forecast and connect it to scenarios
$.getJSON("forecast.json", function(data){
    console.log(data)

    layerGroup = L.layerGroup();
    

    for (i = 0; i < 8; i++) {
        
        // let t = data.list[i]["dt_txt"].slice(11,19);
        console.log('Time:', data.list[i]["dt_txt"]);

        let rain_3h = (data.list[i]["rain"]["3h"] !== undefined) ? data.list[i]["rain"]["3h"] : null;

        console.log('Rain: ',rain_3h)
        let layer = null;
        //if statements for layer connection with the weather forecast
          if (rain_3h) {
            if (rain_3h <= 30) {
              layer = getLayerFromFile(FILES.FILE_1, data.list[i]["dt_txt"]); //hold the amount of the rainfall
            } else if ((rain_3h > 30) && (rain_3h <= 40)) {
              layer = getLayerFromFile(FILES.FILE_2, data.list[i]["dt_txt"]);
            } else if ((rain_3h > 40) && (rain_3h <= 50)) {
              layer = getLayerFromFile(FILES.FILE_3, data.list[i]["dt_txt"]);
            } else if ((rain_3h > 50) && (rain_3h <= 60)) {
              layer = getLayerFromFile(FILES.FILE_4, data.list[i]["dt_txt"]);
            } else if ((rain_3h > 70) && (rain_3h <= 80)) {
              layer = getLayerFromFile(FILES.FILE_5, data.list[i]["dt_txt"]);
            }  else if ((rain_3h > 80) && (rain_3h <= 90)) {
              layer = getLayerFromFile(FILES.FILE_6, data.list[i]["dt_txt"]);
            }  else if ((rain_3h > 90) && (rain_3h <= 100)) {
              layer = getLayerFromFile(FILES.FILE_7, data.list[i]["dt_txt"]);
            }  else if ((rain_3h > 100) && (rain_3h <= 110)) {
              layer = getLayerFromFile(FILES.FILE_8, data.list[i]["dt_txt"]);
            } else if (rain_3h > 110) {
              layer = getLayerFromFile(FILES.FILE_9, data.list[i]["dt_txt"]);
             }
          } else {
            layer = L.geoJSON([{  //add a point which is not visible in case it doesn't find rainfall in .json -- equals with 'null'
                "type": "Feature",
                "properties": {
                  "name": "Coors Field",
                  "show_on_map": false
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [55.6694, 12.5893]
                }
              }], {
              style: {"color": "transparent"},
              time: data.list[i]["dt_txt"]
            });
          }
          

          layerGroup.addLayer(layer); 


      }

      var sliderControl = L.control.sliderControl({ layer: layerGroup });
      map.addControl(sliderControl);
      sliderControl.startSlider();


          


   






})

