var map;


var newObject = {
	lat: 30.284933,
	lng: -97.750701
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 30.284933, lng:-97.750701},
		zoom: 12	
	});

	var marker = new google.maps.Marker({
		position: {lat: newObject.lat, lng: newObject.lng},
		map: map
	});

}

initMap();

// map.addListener("click",function(){

// })