
//=====================================CRISTIANS SUPER CODE
var map;
var infowindow;
var request;
var service;
var markers = [];
var lat;
var lng;
var cat = [];
var resultObject;
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
        map.setCenter({ lat, lng })
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
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            markers.push(createMarker(results[i]));
        }
    }

    //=============STETSON TRYING TO GET TODO LIST TO POPULATE==========
    // Got the todo list to populate. Moved all js from todo-list.js inside
    // this callback function and got it to work.

    // for loop to populate todo list with result name
    for (var i = 0; i < results.length; i++) {
        $("#myUL").append("<li>" + results[i].name + "</li>");
    }

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    // Create a new list item when clicking on the "Add" button
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
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
