// Grab location form
var locationForm = document.getElementById("location-form");

// Listen for submit
locationForm.addEventListener("submit", geocode);

function geocode(e) {

    // Prevent actual submit
    e.preventDefault();

    var location = document.getElementById("dest-input").value;

    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: location,
            key: "AIzaSyCVv-LZUkuQRgMEx1vpNqhMnDY7LZaWnik"
        }
    })
        .then(function (response) {

            // Log full response
            console.log(response);

            // Geometry
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            console.log("LATITUDE: " + lat + "LONGITUDE: " + lng);
        })
}