$(document).ready(function(){
  initMap();
});


function initMap() {
  if ($('.js-mapContact').length > 0) {
    initialize();
    google.maps.event.addDomListener(window, 'load', initialize);
  }

}

function initialize() {

var locations = [
      ['City 1', 33.79740877, -117.81738281, 4],      
      ['City 2', 39.50404071, -101.16210937, 3],
      ['City 3', 48.10743119, -121.37695312, 2], 
      ['City 4', 47.87214397, -124.18945312, 1] 
    ];
    var stylesArray = [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        { hue: "#21425c" },
        { saturation: '' },
        { lightness: '' },
        { gamma: '' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'highway',
      stylers: [
        { hue: "#21425c" },
        { saturation: '' },
        { lightness: '' },
        { gamma: '' }
      ]
    }
  ];

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 2,
      center: new google.maps.LatLng(13.58, -14.58),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });   
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var image = 'img/map_marker.png';
    map.setOptions({styles: stylesArray});
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: image,
        map: map
      });      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }  
}