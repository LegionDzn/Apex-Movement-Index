var DarkModeDesired = parent.DarkModeDesired;
if (DarkModeDesired == true) {
  console.log("turning on dark mode within iframe");
  document.getElementById("bodytoggle").classList.add('dark');
} else {
  console.log("turning off dark mode within iframe");
  document.getElementById("bodytoggle").classList.remove('dark');
}
