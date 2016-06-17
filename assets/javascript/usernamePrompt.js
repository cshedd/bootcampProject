
var ref = new Firebase('https://webdevprojectut.firebaseio.com/');

var usersRef = ref.child("users");

var inDatabase;

function setUser(name){
  ref.once("value",function(snapshot){
    inDatabase = snapshot.child("users/"+ name).exists();

    if (inDatabase){
      alert("user in database");
    }
    else{
      usersRef.child(name).set({
        name: name,
        vote: 0
      });
      alert("user added as: " + name);
    }
  });
}

// setUser();

// function other(stuff){
//   ref.once("value", function(snapshot){
//     var alan = snapshot.child("users/alanisawesome").exists();
//     console.log("in other function");
//     console.log("alan is"+ alan);
//   });
// }
var testingName;

function testing(name){
  testingName = name;
  console.log("in otherfunction");
  console.log("otherfunction: "+ testingName);
}


function promptUserName() {
  var something;
  swal({
    title: "Hello there!",
    text: "Please enter your name:",
    type: "input",
    showCancelButton: false,
    closeOnConfirm: true,
    confirmButtonText: "Submit",
    inputPlaceholder: "Type your name"},
    function(nameInput) {
      if (nameInput === false) return false;
      if (nameInput === "") {
        swal.showInputError("Please enter your name:");
        return false;
      }
      // setUser(nameInput);
      console.log("in function:"+ nameInput);
      something = nameInput;
      testing(nameInput);
    }
  );

  console.log("something is" + something);
}

promptUserName();


////////////////////////////////////////////////////////////////////////////////////
// Closes Chat Room Box
	$('.closeChat').on('click',function(){
		$('.collapse').collapse('hide');
	});

//Chat box will display on right column on large screens then collapses and becomes button on smaller screen sizes
$(window).resize(function () {
	function addChatClass() {
		var viewportWidth = $(window).width();
    if (viewportWidth > 1150) {
      $('.panel-collapse.collapse').addClass("in");
    }
		if (viewportWidth < 1150) {
      $('.panel-collapse.collapse.in').removeClass("in");
    }
	}
	addChatClass();
});
