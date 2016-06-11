// function generateNum() {
//   Math.floor(Math.random() * 9);
// }


function promptUserName() {
  swal({title: "Hello there!", text: "Please enter your name:", type: "input",   showCancelButton: true, closeOnConfirm: false, animation: "slide-from-top",   inputPlaceholder: "Write something"},

  function(inputValue) {
    if (inputValue === false) return false;
    if (inputValue === "") {
      swal.showInputError("Please enter your name:");
      return false;
    }
    swal("Nice!", "You wrote: " + inputValue, "success");
  });
}
