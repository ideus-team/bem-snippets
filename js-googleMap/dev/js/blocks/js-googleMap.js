function initGoogleMap() {

  // Main options
  var mapCanvas = document.getElementById('googleMap');
  var mapOptions = {
    center: new google.maps.LatLng(36.472832, -99.525440),
    zoom: 12,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);

  // Markers
  var simpleMarker = new google.maps.MarkerImage('/img/blocks/b-googleMap/mapCanvas-marker.png',
                     new google.maps.Size(80, 80), //size
                     new google.maps.Point(0, 0), //origin point
                     new google.maps.Point(40, 40)); // offset point

  var activeMarker = new google.maps.MarkerImage('/img/blocks/b-googleMap/mapCanvas-active-marker.png',
                     new google.maps.Size(124, 124), //size
                     new google.maps.Point(0, 0), //origin point
                     new google.maps.Point(62, 62)); // offset point

  var locations = [
    // [title, coordinate, coordinate, zIndex, infoLocation, infoPhone, infoEmail]
    ['Lorem Ipsum', 36.493949, -99.718731, 4, '1112-1 Island Drive,<br/> Suite 99 Redwood City, CA 99999', '+555 005 505 050', 'info@dentaltheme.com', '/img/blocks/b-googleMap/location-ill.jpg'],
    ['Dolor Sit Amet', 36.450052, -99.603374, 5, '1112-2 Island Drive,<br/> Suite 99 Redwood City, CA 99999', '+555 005 505 050', 'info@dentaltheme.com', '/img/blocks/b-googleMap/location-ill.jpg'],
    ['Mutat Inciderint', 36.472832, -99.525440, 3, '1112-3 Island Drive,<br/> Suite 99 Redwood City, CA 99999', '+555 005 505 050', 'info@dentaltheme.com', '/img/blocks/b-googleMap/location-ill.jpg'],
    ['Sadipscing', 36.407788, -99.419010, 2, '1112-4 Island Drive,<br/> Suite 99 Redwood City, CA 99999', '+555 005 505 050', 'info@dentaltheme.com', '/img/blocks/b-googleMap/location-ill.jpg'],
    ['Numquam', 36.473522, -99.347599, 1, '1112-5 Island Drive,<br/> Suite 99 Redwood City, CA 99999', '+555 005 505 050', 'info@dentaltheme.com', '/img/blocks/b-googleMap/location-ill.jpg']
  ];

  var markers = [], infoWindows = [];

  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var markerPos = new google.maps.LatLng(location[1], location[2]);
    var marker = new google.maps.Marker({
        position: markerPos,
        map: map,
        icon: simpleMarker,
        title: location[0],
        zIndex: location[3]
    });

    var contentString = '<div class="l-locationInfo"><div class="b-locationInfo"><div class="b-locationInfo__img"><img alt="' + location[0] + '" src="' + location[7] + '"/></div><ul class="b-locationInfo__list"><li class="b-locationInfo__item -type_location">' + location[4] + '</li><li class="b-locationInfo__item -type_tel">' + location[5] + '</li><li class="b-locationInfo__item -type_mail"><a href="mailto:' + location[6] + '">' + location[6] + '</a></li></ul></div></div>';

    // var infowindow = new google.maps.InfoWindow({
      // content: contentString
    // });

    var infoBoxOptions = {
      content: contentString,
      disableAutoPan: false,
      maxWidth: 0,
      pixelOffset: new google.maps.Size(-270, 0),
      zIndex: null,
      boxStyle: {
        background: "#fff",
        width: "540px"
      },
      closeBoxMargin: '3px',
      closeBoxURL: 'img/infobox-close-icon.png',
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };

    var locationInfoWindow = new InfoBox(infoBoxOptions);

    // Creating an Arrays of Markers and infoWindows
    markers.push(marker);
    infoWindows.push(locationInfoWindow);

    // Callback Function on Marker Click
    markerCallback(marker, locationInfoWindow);
  }

  // Creating a Callback Function on Marker Click
  function markerCallback(marker, locationInfoWindow) {
    google.maps.event.addListener(marker, 'click', function() {
      for (var i=0; i<markers.length; i++) {
        markers[i].setIcon(simpleMarker);
        infoWindows[i].close();
      }

      marker.setIcon(activeMarker);

      //infowindow.open(map,marker);
      locationInfoWindow.open(map, marker);

    });
  }

  // Map styles
  var styles = [
    {
      "elementType": "geometry",
      "stylers": [
        { "hue": "#00bbff" },
        { "lightness": 20 },
        { "gamma": 1.18 },
        { "saturation": 20 }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
