window.onload = setdark;
window.onload = TakeAShit;
window.onresize = TakeAShit;

function TakeAShit() {
  let sidebarelement = document.querySelector('#ToC');
  let videoelement = document.getElementsByClassName("VidCont");
  console.log(videoelement);

  document.getElementById("Main").style.height = sidebarelement.clientHeight + "px";
  document.getElementById("Iframe").style.height = sidebarelement.clientHeight - 4 + "px";

}
