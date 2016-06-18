//access the database 
var ref = new Firebase('https://webdevprojectut.firebaseio.com/');

//reference the user portion of database
var usersRef = ref.child("users");

//user name provided by user
var userName; 

//T/F if userName already in database
var inDatabase;

//reference the chat portion of database
var chatRef = ref.child("chat");

//sets the user in the database if not already in there
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

function addMessage(){
  var message = $("#btn-input").val();
  
  var testTime = 1466211054437;
  var now = moment().valueOf();
  var fromNow = moment(testTime).fromNow();
  console.log("message received at: "+ now);
  console.log("from now: "+ fromNow);
  if (message == ""){
    alert("you said nothing");
  }
  else{  
    var newMessage = {
      name: userName,
      message: message,
      time: now
    }
    chatRef.push().set(newMessage);
  }


  $("#btn-input").val("");
}
//Main function
function main() {
  swal({
    title: "Hello there!",
    text: "Please enter your name:",
    type: "input",
    showCancelButton: false,
    closeOnConfirm: true,
    confirmButtonText: "Submit",
    inputPlaceholder: "Type your name"},
    function(name) {
      if (name === false) return false;
      if (name === "") {
        swal.showInputError("Please enter your name:");
        return false;
      }
      // setUser(name);
      userName = name;
      $("#btn-chat").on("click", addMessage);


    });
}

main();


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
