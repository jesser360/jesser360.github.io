// sanity check
console.log("app.js linked.");
console.log('hi');
//var button = document.getElementById('private');
//var privateLink = document.createElement("private");
//document.getElementById("private").addEventListener("click", password);
function password(){
  console.log('pw');
  var reply = prompt("please enter password");
  if (reply !== 12345){
    alert("welcome to the secrets of the web");
  } else {
    alert('-- Incorrect Password -- ');
  }
}
