
//=====================================CRISTIANS SUPER CODE
var map;
var infowindow;
var request;
var service;
var markers = [];
var lat;
var lng;
var cat = [];
function initialize() {

  var resultsURl = window.location.href;
  console.log(resultsURl);

  var params = resultsURl.split("&");
  lat = parseFloat(params[0].split("=")[1]);
  lng = parseFloat(params[1].split("=")[1]);
  cat.push(params[2].split("=")[1]);
  console.log(lat);
  console.log(lng);
  console.log(cat);

  var location = {
    lat: lat,
    lng: lng
  };

    var center = new google.maps.LatLng(lat, lng);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
    });
    request = {
        location: center,
        radius: 10000,
        types: cat
    };
    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    google.maps.event.addListener(map, 'rightclick', function (event) {
        console.log(event.latLng.lat());
        lat = event.latLng.lat();
        lng = event.latLng.lng();
        map.setCenter({lat, lng})
        clearResults(markers);
        var request = {
            location: new google.maps.LatLng(lat, lng),
            radius: 10000,
            types: cat
        };
        service.nearbySearch(request, callback);
    })
}
function callback(results, status) {
  console.log(results);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            markers.push(createMarker(results[i]));

        }
    }
}
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
    return marker;
}
function clearResults(markers) {
    for (var m in markers) {
        markers[m].setMap(null)
    }
    markers = [];
}
google.maps.event.addDomListener(window, 'load', initialize);
