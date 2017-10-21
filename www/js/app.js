/*
 *
 *
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    initMap();
}

var map, infoWindow;
//initialize the map
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 5.582830, lng: -0.307473},
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;

    
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

/**
 * Pins the location of the user with a red marker on the map
 *
 */
function pinMe(){
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        //Get the current position of the user
        navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
        
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Me'
        });
        //center the map to the marked location
        map.setCenter(pos);
        map.setZoom(18);
        
    });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    
    
}



