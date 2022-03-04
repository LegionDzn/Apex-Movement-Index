function switchpage(url) {
  setdark()
  document.getElementById("Iframe").style.display = "none";
  document.getElementById("Iframe").src = url;
  globalThis.yourGlobalVariable = url;
  console.log(yourGlobalVariable);
  document.getElementById("Iframe").style.display = "block";

}
