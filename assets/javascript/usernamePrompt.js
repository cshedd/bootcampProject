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

//Adds new message to firebase
function addMessage(){
  var message = $("#btn-input").val();

  var now = moment().valueOf();

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

function loadChat(childSnapshot, prevChildKey){
  var key =childSnapshot.key();
  var name = childSnapshot.val().name;
  var message = childSnapshot.val().message;
  var time = childSnapshot.val().time;
  var timeFromNow = moment(time).fromNow();

  $(".chat").append("<li id="+ key +" class='left clearfix'><div class='chat-body clearfix'><div class='header'><strong class='primary-font'>" + name + "</strong> <small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + timeFromNow + "</small></div><p>" + message + "</p></div></li>");
}

function refeshChat(){
  chatRef.on("child_added", function(childSnapshot,prevChildKey){
    var key =childSnapshot.key();
    var name = childSnapshot.val().name;
    var message = childSnapshot.val().message;
    var time = childSnapshot.val().time;
    var timeFromNow = moment(time).fromNow();
    $("#" + key).html("<li id="+ key +" class='left clearfix'><div class='chat-body clearfix'><div class='header'><strong class='primary-font'>" + name + "</strong> <small class='pull-right text-muted'><span class='glyphicon glyphicon-time'></span>" + timeFromNow + "</small></div><p>" + message + "</p></div></li>");
  });
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
      chatRef.on("child_added", loadChat);
      setInterval('refeshChat()', 60000);


    });
}

main();


// Closes Chat Room Box
	$('.closeChat').on('click',function(){
		$('.collapse').collapse('hide');
	});

$(window).on("resize", function () {
	function addChatClass() {
		var viewportWidth = $(window).width();
    if (viewportWidth > 1150) {
      $('.panel-collapse.collapse').addClass("in");
    }
		if (viewportWidth < 1150) {
      $('.panel-collapse.collapse.in').removeClass("in");
    }
    if (viewportWidth < 480) {
      $('.panel-collapse.collapse.in').removeClass("in");
    }
	}
	addChatClass();
}).resize();


//////////////////////////////////////////////////////////////////////

var placesRef = ref.child("places");


function loadButtons(){

  placesRef.once("value", function(snapshot){
    var optionOne = snapshot.child("optionOne").val();
    var optionTwo = snapshot.child("optionTwo").val();

    $("#imageOne").append("<img class='img-responsive' value=1 src=" + optionOne.imgFilePath +">");
    $("#nameOne").html(optionOne.name);
    $("#voteCount1").html(optionOne.votes);

    $('.imageButton').on('click', function() { 
      swal({title: "Vote Received!",   
        text: "Thank you for participating",
        type: "success", confirmButtonColor: "#2ecc71",
        confirmButtonText: "Close",
        closeOnConfirm: true });

    });

    $("#imageTwo").append("<img class='img-responsive' value=2 src=" + optionTwo.imgFilePath +">");
    $("#nameTwo").html(optionTwo.name);
    $("#voteCount2").html(optionTwo.votes);

    // $('.imageButton2').on('click', function() {
    //   swal({title: "Vote Received!",
    //     text: "Thank you for participating",
    //     type: "success", confirmButtonColor: "#2ecc71",
    //     confirmButtonText: "Close",
    //     closeOnConfirm: true });
    // });

  })
}

function mainImages(){

  var hour = moment().format("LTS");
  console.log("the hour is: " + hour);
  //later add that if the date changes so do the two suggestions 
  //reset the vote 
  // if the time of day is midnight reset

  // placesRef.set({
  //  optionOne: {
  //    name: "Barton Spring Pool",
  //    imgFilePath: 'assets/images/Barton-Springs.jpg',
  //    votes: 0
  //  },
  //  optionTwo: {
  //    name: "Hey Cupcake",
  //    imgFilePath: 'assets/images/Hey-Cupcake.jpg',
  //    votes: 0 
  //  }
  // });

  loadButtons();

}

mainImages();
