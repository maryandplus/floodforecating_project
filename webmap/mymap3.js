
// create the OSM layer
var map = L.map('map', {
  center: [55.6694, 12.5893],
  zoom: 12
});

//osm B&W
var osm = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);



// bluespot layers
var bs30 = new L.GeoJSON.AJAX("bs30mm.geojson", {
time:'30mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});


var bs40 = new L.GeoJSON.AJAX("bs40mm.geojson", {
time:'40mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs50 = new L.GeoJSON.AJAX("bs50mm.geojson", {
time:'50mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs60 = new L.GeoJSON.AJAX("bs60mm.geojson", {
time:'60mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs70 = new L.GeoJSON.AJAX("bs70mm.geojson", {
time:'70mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs80 = new L.GeoJSON.AJAX("bs80mm.geojson", {
time:'80mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs90 = new L.GeoJSON.AJAX("bs90mm.geojson", {
time:'90mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs100 = new L.GeoJSON.AJAX("bs100mm.geojson", {
time:'100mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs100 = new L.GeoJSON.AJAX("bs110mm.geojson", {
time:'110mm',style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var bs110 = new L.GeoJSON.AJAX("bs110mm.geojson", {
style: {fillColor: "#6495ED",
    color: "#0000ff",opacity: 0,
    fillOpacity: 1}
});

var allfuelst = new  L.GeoJSON.AJAX('gasstations_CPH.geojson', {
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                        return L.circle(latlng, {
                                          color: '#004c00',
                                          radius:15
                                        });
                                      }
                                    });

var MarkerIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [0, 0],
        shadowSize:   [46, 34],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

//icon for fuel stations
var redIcon = new MarkerIcon({iconUrl: 'leaf-red.png'})
    
L.icon = function (options) {
    return new L.Icon(options);
};
  
//call the statial query from postgis

  var url_30 = "http://127.0.0.1:5000/gas/30"
  console.log(url_30)

  $.getJSON(url_30, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer30mm = L.geoJson(data,{
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                         });
                                      }
                                    })
  

  
  var url_40 = "http://127.0.0.1:5000/gas/40"
  console.log(url_40)

   $.getJSON(url_40, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer40mm = L.geoJson(data,{
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })

 

  var url_50 = "http://127.0.0.1:5000/gas/50"
  console.log(url_50)

   $.getJSON(url_50, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer50mm = L.geoJson(data,{
                                     pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
  

 var url_60 = "http://127.0.0.1:5000/gas/60"
  console.log(url_60)

  $.getJSON(url_60, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer60mm = L.geoJson(data,{
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
  

 
 var url_70 = "http://127.0.0.1:5000/gas/70"
  console.log(url_70)

  $.getJSON(url_70, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer70mm = L.geoJson(data,{
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
  

 var url_80 = "http://127.0.0.1:5000/gas/80"
  console.log(url_80)

  $.getJSON(url_80, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer80mm = L.geoJson(data,{
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
    
 var url_90 = "http://127.0.0.1:5000/gas/90"
  console.log(url_90)

  $.getJSON(url_90, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer90mm = L.geoJson(data,{
                                      pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
  

var url_100 = "http://127.0.0.1:5000/gas/100"
  console.log(url_100)

  $.getJSON(url_100, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer100mm = L.geoJson(data,{
                                     pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
   

var url_110 = "http://127.0.0.1:5000/gas/110"
  console.log(url_110)

  $.getJSON(url_110, function(data){

    console.log(data)

    // add GeoJSON layer to the map once the file is loaded
    myLayer110mm = L.geoJson(data,{
                                   pointToLayer: function(geoJsonPoint, latlng) {
                                         return L.marker(latlng, {icon: redIcon
                                        });
                                      }
                                    })
   

//group bluespots and fuel stations
var gas30mm = L.layerGroup([myLayer30mm, bs30], {time: "30mm"});
var gas40mm = L.layerGroup([myLayer40mm, bs40],  {time: "40mm"});
var gas50mm = L.layerGroup([myLayer50mm, bs50],  {time: "50mm"});
var gas60mm = L.layerGroup([myLayer60mm, bs60],  {time: "60mm"});
var gas70mm = L.layerGroup([myLayer70mm, bs70],  {time: "70mm"});
var gas80mm = L.layerGroup([myLayer80mm, bs80],  {time: "80mm"});
var gas90mm = L.layerGroup([myLayer90mm, bs90],  {time: "90mm"});
var gas100mm = L.layerGroup([myLayer100mm, bs100],  {time: "100mm"});
var gas110mm = L.layerGroup([myLayer110mm, bs110],  {time: "110mm"});

var gas_bluespots = [gas30mm,gas40mm,gas50mm,gas60mm,gas70mm,gas80mm,gas90mm,gas100mm,gas110mm];

layerGroup = L.layerGroup(gas_bluespots);
//set the slidercontrol
var sliderControl = L.control.sliderControl({
  layer: layerGroup,
  follow: true
});



// slider 
map.addControl(sliderControl);
// initialize the slider
sliderControl.startSlider();



  



  });

  });


  });


  });

  });


  });

  });
 
  });
 
  });





var baseMaps = {
    "Grayscale": osm
    
};

var overlayMaps = {
    "allfuelst": allfuelst
};

L.control.layers(baseMaps,overlayMaps).addTo(map);