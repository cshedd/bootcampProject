var map;

function setPins(){
  var geocoder = new google.maps.Geocoder();
	var firstPlace = prompt("find a location");
	// var secondPlace = places[1];  

	geocoder.geocode({"address": firstPlace}, function(results, status){
		if (status === google.maps.GeocoderStatus.OK){
			// map.setCenter(results[0].geometry.location);
			console.log(typeof(results[0].geometry.location));
			var marker = new google.maps.Marker({
				map:map,
				position: results[0].geometry.location,
				animation: google.maps.Animation.DROP,
				title: firstPlace
			});

			marker.setMap(map);

		} else{
			alert('Error Loading Map!');
		}
	});
}

function initMap() {
  	map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: -34.397, lng: 150.644},
    // zoom: 6
  	});

  	var infoWindow = new google.maps.InfoWindow({map:map});

  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position){
  			var yourPosition = {
  				lat: position.coords.latitude,
  				lng: position.coords.longitude
  			};

  			infoWindow.setPosition(yourPosition);
  			infoWindow.setContent('You Are Here');
  			map.setCenter(yourPosition);
  			map.setZoom(10);
  		});
  	}
    // setPins();
  	// var geocoder = new google.maps.Geocoder();
}

initMap();

// setPins();
// setPins();