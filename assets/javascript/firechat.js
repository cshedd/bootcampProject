// var chatRef = new Firebase('https://webdevprojectut.firebaseio.com/chat');


// function login() {
//   chatRef.authWithOAuthPopup("twitter", function(error, authData) {
//     if (error) {
//       console.log(error);
//     }
//   });
// }

// chatRef.onAuth(function(authData) {
//   // Once authenticated, instantiate Firechat with our user id and user name
//   if (authData) {
//     initChat(authData);
//   }
// });

// function initChat(authData) {
//   var chat = new FirechatUI(chatRef, document.getElementById('google-maps'));
//   chat.setUser(authData.uid, authData[authData.provider].displayName);
// }

var ref = new Firebase("https://testingherbert.firebaseio.com/");

var usersRef = ref.child("users");
var postsRef = ref.child("posts");

  postsRef.push().set({
    author: "alanisawesome",
    title: "The Turing Machine"
  });