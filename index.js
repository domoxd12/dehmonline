var password = "nukeradio";

function passcheck() {

if(document.getElementById('nuke').value != password) {
alert('ACCESS DENIED!!!!');
  return false;
}

if(document.getElementById('nuke').value == password) {
alert('ur in , click ok to enter');

}
}
