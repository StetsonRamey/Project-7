


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
