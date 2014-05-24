function createMap() {
	var belkiraLocation = new google.maps.LatLng(-34.603795, 145.982526)
	var brotherLocation = new google.maps.LatLng(-34.574405, 145.990691)
	var mapOptions = {
		zoom: 12,
		center: belkiraLocation
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var belkira = new google.maps.Marker({
		position: belkiraLocation,
		map: map

	});

	var brother = new google.maps.Marker({
		position: brotherLocation,
		map: map

	});

	var infowindow = new google.maps.InfoWindow();

	google.maps.event.addListener(belkira, "click", function() {
		infowindow.setContent("belkira");
		infowindow.open(map, belkira);

	google.maps.event.addListener(brother, "click", function() {
		infowindow.setContent("brother");
		infowindow.open(map, brother);
	});

)}

google.maps.event.addDomListener(window, "load", createMap);
