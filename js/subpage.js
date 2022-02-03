var DarkModeDesired = parent.DarkModeDesired;
if (DarkModeDesired == true) {
  console.log("turning on dark mode within iframe");
  document.getElementById("bodytoggle").classList.add('dark');
} else {
  console.log("turning off dark mode within iframe");
  document.getElementById("bodytoggle").classList.remove('dark');
}
function containtermouseout()
{
  document.querySelectorAll('video').forEach(vid => vid.pause());
}
console.log("mousein");



window.onload = SetVideoWidth;
window.onresize = SetVideoWidth;

function SetVideoWidth() {
  var width = document.body.clientWidth;
  var calculatedwidth = width * .44 +"px";
var calculatedheight = width * 0.2475 +"px" ;


  var elements = document.getElementsByClassName('player');
for (var i = 0; i < elements.length; i++) {
    elements[i].style.width = calculatedwidth;
    elements[i].style.height = calculatedheight;
    console.log(calculatedwidth);
    console.log(calculatedheight);

}
}
