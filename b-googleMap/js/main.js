$(document).ready(function(){
    initGoogleMap();
});

function initialize() {
  infowindow = new google.maps.InfoWindow();
  var mapOptions = {
    zoom: 18,
    center: new google.maps.LatLng(33.616951,-111.869769),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     // need marker? here it is.
//  var marker = new google.maps.Marker({
//    position: new google.maps.LatLng(33.61654,-111.872633),
//    title: 'Net-Craft.com',
//    icon: image
//  });

     //need marker click hint? take it!
//  google.maps.event.addListener(marker, 'click', function() {
//    infowindow.setContent("YOUR MARKER HINT TEXT");
//    infowindow.open(map,marker);
//  });
  marker.setMap(map);
}

function initGoogleMap() {
  if($('.j-googleMap').length > 0){
    initialize();
    google.maps.event.addDomListener(window, 'load', initialize);
  }
}