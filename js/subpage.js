let debug = false


var DarkModeDesired = parent.DarkModeDesired;
if (DarkModeDesired == true) {
  document.getElementById("bodytoggle").classList.add('dark');
} else {
  document.getElementById("bodytoggle").classList.remove('dark');
}


window.onload = SetVideoWidth;
window.onresize = SetVideoWidth;

function SetVideoWidth() {
var width = document.body.clientWidth;
var calculatedwidth = width * .44;
var calculatedheight = width * 0.2475;

  var elements = document.getElementsByClassName('player');
for (var i = 0; i < elements.length; i++) {
  var calculatedwidthround = Math.round(10*calculatedwidth)/10;     // round X to tenths
  var calculatedheightround = Math.round(10*calculatedheight)/10;     // round X to tenths

    elements[i].style.width = calculatedwidthround +"px";
    elements[i].style.height = calculatedheightround +"px" ;

}
}
