// sanity check
//var privateLink = document.createElement("private");
var button = document.getElementById('private');
button.addEventListener("click", prompt("password?"));
function password(){
  console.log('pw');
  var reply = prompt("please enter password");
  if (reply !== 12345){
    alert("welcome to the secrets of the web");
  } else {
    alert('-- Incorrect Password -- ');
  }
}
