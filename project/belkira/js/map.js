

setTimeout(function() {

$('#locations').on('click', function() {
  
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(-34.603852, 145.982600)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var Belkira = new google.maps.Marker({
      position: new google.maps.LatLng(-34.603852, 145.982600),
      map: map
  });

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(Belkira, 'click', function() {
    infowindow.setContent("Belkira")
    infowindow.open(map, Belkira);
  });

})    

}, 750);

