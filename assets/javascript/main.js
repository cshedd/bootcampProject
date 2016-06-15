var map;

// var places = ["Los Angeles, CA", "barton springs", "homeslice pizza"];

// $("#clickMe").on('click',function(){

// 	var newObject = {
// 		lat: 30.284933,
// 		lng: -97.750701
// 	}
// 	var marker = new google.maps.Marker({
// 	position: {lat: newObject.lat, lng: newObject.lng},
// 	map: map
// 	});

// 	map.setCenter(marker.position);
// 	map.setZoom(10);
// })

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
			alert('you fucked up');
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
  			infoWindow.setContent('HERE U IS BITCH');
  			map.setCenter(yourPosition);
  			map.setZoom(10);
  		})
  	}

  	// var geocoder = new google.maps.Geocoder();
}

initMap();

setPins();
setPins();






