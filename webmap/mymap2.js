

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


//add bluespots
var bs30mm = new L.GeoJSON.AJAX("incercare/scenario/bs30mm.geojson",{
      time:'30mm',
      style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
    });
      

var bs40mm = new L.GeoJSON.AJAX("incercare/scenario/bs40mm.geojson",{
      time:'40mm',
      style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
      
    });
      
var bs50mm = new L.GeoJSON.AJAX("incercare/scenario/bs50mm.geojson",{
      time:'50mm',
      style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
      
    });
      
var bs60mm = new L.GeoJSON.AJAX("incercare/scenario/bs60mm.geojson",{
      time:'60mm',
      style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
      
    });
      
var bs70mm = new L.GeoJSON.AJAX("incercare/scenario/bs70mm.geojson",{
      time:'70mm',
      style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
      
    });

var bs80mm = new L.GeoJSON.AJAX("incercare/scenario/bs80mm.geojson",{
    style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1},
    time:'80mm',
    
});

var bs90mm = new L.GeoJSON.AJAX("incercare/scenario/bs90mm.geojson",{
    style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1},
    time:'90mm',
    
});

var bs100mm = new L.GeoJSON.AJAX("incercare/scenario/bs100mm.geojson",{
    style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1},
    time:'100mm',
    
});

var bs110mm = new L.GeoJSON.AJAX("incercare/scenario/bs110mm.geojson",{
    style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1},
    time:'110mm',
    
});






//group bluespots

var bluespots = [bs30mm,bs40mm,bs50mm,bs60mm,bs70mm,bs80mm,bs90mm,bs100mm,bs110mm];

layerGroup = L.layerGroup(bluespots);
//set the slidercontrol
var sliderControl = L.control.sliderControl({
  layer: layerGroup,
  follow: true
});



// slider 
map.addControl(sliderControl);
// initialize the slider
sliderControl.startSlider();
