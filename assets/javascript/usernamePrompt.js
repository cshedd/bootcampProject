
var ref = new Firebase('https://webdevprojectut.firebaseio.com/');


//CHAT////////////////////////////////////////

var usersRef = ref.child("users");
// var name = prompt("What is your name? (first last)");

var inDatabase;

function setUser(name){
  ref.once("value",function(snapshot){
    inDatabase = snapshot.child("users/"+ name).exists();

    if (inDatabase){
      console.log("user in database");
      console.log(inDatabase);
    }
    else{
      // console.log("user not in database");

      usersRef.child(name).set({
        name: name,
        vote: 0
      });
      console.log("user added as: " + name);
      // other();
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


function promptUserName() {
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
		userName = nameInput;
		console.log("in function: "+ userName);
    setUser(nameInput);



  });
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
