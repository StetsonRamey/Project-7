var city;
var state;
var country;
var location = city + "+" + state + "+" + country;
var category;

var yelpKey = "QMBv4dcuLUi8EcphMbSWYDxIisioJ7Sy1NuC7dCrtWuVygMheahI3UwcrFY7Px5Mb_sa7t6LR0oik5JF1iV4nRpDXpsBgg4IDXH59SDSutgagnvXbtWZVTIFAu-fWnYx";


var baseURl = "https://api.yelp.com/v3/businesses/search?term=";


// BEN'S SICK RESULTS PAGE JAVASCRIPT MAP ==========================================================
function initMap() {
  var myLatLng = { lat: 40.725118, lng: -73.997699 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "New York City"
  });

  marker.addListener("click", toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

// END BEN'S SICK RESULTS PAGE JAVASCRIPT MAP ========================================================
