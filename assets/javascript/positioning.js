// Grab location form
var locationForm = document.getElementById("location-form");

// Listen for submit
locationForm.addEventListener("submit", geocode);

function geocode(e) {

  // Prevent actual submit
  e.preventDefault();

  var location = document.getElementById("dest-input").value;

  // Added this for google places
  var activity = document.getElementById("activity-input").value;

  axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    params: {
      address: location,
      types: activity,
      key: "AIzaSyCVv-LZUkuQRgMEx1vpNqhMnDY7LZaWnik"
    }
  })

  .then(function(response) {

    // Log full response
    console.log(response);

    // Geometry
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    console.log("LATITUDE: " + lat + "LONGITUDE: " + lng);


    // change to the results page
    window.location.href = 'results.html' + "?lat=" + lat + "&lng=" + lng;

  })
}

// place a map on the screen

function initMap() {
  // change to the results page
  var resultsURl = window.location.href;
  console.log(resultsURl);

  var params = resultsURl.split("&");
  var lat = parseFloat(params[0].split("=")[1]);
  var lng = parseFloat(params[1].split("=")[1]);
  console.log(lat);
  console.log(lng);

  var location = {
    lat: lat,
    lng: lng
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
  });
  
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}


// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVv-LZUkuQRgMEx1vpNqhMnDY7LZaWnik&libraries=places"></script>
