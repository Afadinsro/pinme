/*
 *
 *
 */

var map, infoWindow;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 5.582830, lng: -0.307473},
        zoom: 10
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

function pinMe(){
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

        /*infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);*/
        
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: ''
        });
        
        map.setCenter(pos);
        
    });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    
    
}

/**
 *
 *
 */

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
    onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
});

$('.collapsible').collapsible();

$('.carousel.carousel-slider').carousel({fullWidth: true});



