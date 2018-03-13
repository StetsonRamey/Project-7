// Grab location form
var locationForm = document.getElementById("location-form");
console.log(document.getElementById("location-form"));

// Listen for submit
locationForm.addEventListener("submit", geocode);

function geocode() {

  // Prevent actual submit
  event.preventDefault();

  var location = document.getElementById("dest-input").value;
  var category = document.getElementById("activity-input").value;

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
      window.location.href = 'results.html' + "?lat=" + lat + "&lng=" + lng + "&cat=" + category + "&loc=" + location;

    })
}
