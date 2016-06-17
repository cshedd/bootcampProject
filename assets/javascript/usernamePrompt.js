
// var dataRef = new Firebase('https://webdevprojectut.firebaseio.com/');
//
// function promptUserName() {
//   swal({
//     title: "Hello there!",
//     text: "Please enter your name:",
//     type: "input",
//     showCancelButton: false,
//     closeOnConfirm: true,
//     confirmButtonText: "Submit",
//     inputPlaceholder: "Type your name"},
//
//   function(nameInput) {
//     if (nameInput === false) return false;
//     if (nameInput === "") {
//       swal.showInputError("Please enter your name:");
//       return false;
//     }
//     var userData = {
// 		    name: nameInput
// 	};
//     dataRef.push(userData);
//
//   });
// }
//
// promptUserName();

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
