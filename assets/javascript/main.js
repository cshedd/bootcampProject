// var map;

// function setPins(){
//   	var geocoder = new google.maps.Geocoder();
// 	var firstPlace = prompt("find a location");
// 	// var secondPlace = places[1];

// 	geocoder.geocode({"address": firstPlace}, function(results, status){
// 		if (status === google.maps.GeocoderStatus.OK){
// 			// map.setCenter(results[0].geometry.location);
// 			console.log(typeof(results[0].geometry.location));
// 			var marker = new google.maps.Marker({
// 				map:map,
// 				position: results[0].geometry.location,
// 				animation: google.maps.Animation.DROP,
// 				title: firstPlace
// 			});

// 			marker.setMap(map);

// 		} else{
// 			alert('you fucked up');
// 		}
// 	});
// }

// function initMap() {
//   	map = new google.maps.Map(document.getElementById('map'), {
//     // center: {lat: -34.397, lng: 150.644},
//     // zoom: 6
//   	});

//   	var infoWindow = new google.maps.InfoWindow({map:map});

//   	if (navigator.geolocation) {
//   		navigator.geolocation.getCurrentPosition(function(position){
//   			var yourPosition = {
//   				lat: position.coords.latitude,
//   				lng: position.coords.longitude
//   			};

//   			infoWindow.setPosition(yourPosition);
//   			infoWindow.setContent('HERE U IS BITCH');
//   			map.setCenter(yourPosition);
//   			map.setZoom(10);
//   		});
//   	}

//   	// var geocoder = new google.maps.Geocoder();
// }

// initMap();

// setPins();
// setPins();


//CHAT////////////////////////////////////////

var ref = new Firebase("https://testingherbert.firebaseio.com/");

var usersRef = ref.child("users");
var userName = prompt("What is your name? (first last)");

var inDatabase;

function setUser(){
	ref.once("value",function(snapshot){
		inDatabase = snapshot.child("users/"+ userName).exists();

		if (inDatabase){
			console.log("user in database");
			console.log(inDatabase);
		}
		else{
			// console.log("user not in database");

			usersRef.child(userName).set({
				userName: userName,
				vote: 0
			});
			console.log("user added as: " + userName);
			// other();
		}
	});
}

setUser();

function other(stuff){
	ref.once("value", function(snapshot){
		var alan = snapshot.child("users/alanisawesome").exists();
		console.log("in other function");
		console.log("alan is"+ alan);
	});
}

//////
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hoper"
//   }
// });

// // function addingUser (){
// // 	var getName = usersRef.child(userName);
// // 	console.log(getName);
// // }

// // addingUser();

// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
//   var tree = snapshot.val();
//   var user = snapshot.child("users/alanisawesome").exists();
//   console.log("user is" + user);


// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });