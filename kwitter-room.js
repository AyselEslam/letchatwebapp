const firebaseConfig = {
    apiKey: "AIzaSyBEokaPPfModNAUoqvRah5uSWRq3ev4bGs",
    authDomain: "let-chat-web-app-ebc05.firebaseapp.com",
    projectId: "let-chat-web-app-ebc05",
    storageBucket: "let-chat-web-app-ebc05.appspot.com",
    messagingSenderId: "608924911992",
    appId: "1:608924911992:web:1ef0b1c7bc0a516505e08d"
  };
  firebase.initializeApp(firebaseConfig)

var name = document.getElementById("name").innerHTML;
var user = document.getElementById("username_input").value;

function add_room()
{
    roomname = document.getElementById("room_name_input").value;
    localStorage.setItem("roomname", roomname);
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
"<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div><hr>"
//End code
});});}
getData();


function redirect(name)
{
  localStorage.setItem("roomname", roomname) 
  console.log(name)
  window.location = "kwitter_page.html"
}